<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'

const email = ref()
const password = ref()
</script>
<template>
  <div class="flex flex-col gap-6">
    <Card class="overflow-hidden">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8" @submit.prevent>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">
                Create an account
              </h1>
              <p class="text-balance text-muted-foreground">
                Sign-up to create new TRS account
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="grid gap-2">
                <Label for="first-name">First name</Label>
                <Input id="first-name" required />
              </div>
              <div class="grid gap-2">
                <Label for="last-name">Last name</Label>
                <Input id="last-name" required />
              </div>
            </div>
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                  id="asdawfdaw"
                  type="email"
                  name="xxxasdfasda"
                  autoComplete="off"
                  required
              />
            </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" autoComplete="off" />
            </div>
            <Button type="submit" class="w-full">
              Sign-in
            </Button>
            <div class="text-center text-sm">
              Don't have an account?
              <span class="underline underline-offset-4 cursor-pointer" @click="$emit('clickSignInLink')">
                'Sign-in'
              </span>
            </div>
          </div>
        </form>
        <div class="relative hidden bg-muted md:block">
          <div class='w-full h-full bg-gray-400 flex flex-col items-center justify-center'>
            <h1 class='text-9xl font-black'>TRS</h1>
            <div class='w-3/5 flex flex-row items-center justify-between'>
              <h2 v-for='word in ["Thesis", "Record", "System"]' class='tracking-widest'>
                {{ word }}
              </h2>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <div class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
      By clicking Sign-up, you agree to our <a href="#">Terms of Service</a>
      and <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>
