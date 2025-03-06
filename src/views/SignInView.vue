<script setup lang='ts'>
  import SignInForm from '@/components/SignInForm.vue'
  import useAuthStore from '@/stores/auth.ts'
  import type { SignInPayload } from '@/models/types.ts';

  const authStore = useAuthStore()

  const handleSubmitAuthForm = async (payload: SignInPayload) => {
    await authStore.signin(payload.email, payload.password)
  }
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
    <div class="w-full max-w-sm md:max-w-3xl">
      <SignInForm @click-submit-auth-form='handleSubmitAuthForm' />
    </div>
  </div>
</template>

<style scoped>

</style>
