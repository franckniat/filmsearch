<script lang="ts">
export const description =
    "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."
export const iframeHeight = '800px'
export const containerClass = 'w-full h-full p-4 lg:p-0'
</script>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'
</script>

<template>
    <div class="flex flex-1 items-center justify-center">
        <div class="mx-auto grid w-[350px] gap-6">
            <div class="grid gap-2 text-center">
                <h1 class="text-3xl font-bold">Login</h1>
                <p class="text-balance text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div class="grid gap-2">
                    <div class="flex items-center">
                        <Label for="password">Password</Label>
                        <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                            Forgot your password?
                        </a>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" class="w-full"> Login </Button>
                <Button variant="outline" class="w-full"> Login with Google </Button>
            </div>
            <div class="mt-4 text-center text-sm">
                Don't have an account?
                <a href="#" class="underline"> Sign up </a>
            </div>
        </div>
    </div>
</template>
