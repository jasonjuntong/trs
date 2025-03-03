import { defineStore } from 'pinia'
import {computed, ref, watch} from 'vue';
import type { Session, User, AuthChangeEvent } from '@supabase/supabase-js'
import supabase from '@/providers/supabase.ts'
import router from '@/router';

const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)

  watch([user, session], async (value) => {
    const _user = value[0]
    const _session = value[1]
    if(_user && _session) {
      console.log('signing in....')
      await router.push('/')
    } else {
      console.log('signing out....')
      await router.push('/signin')
    }
  })

  const listenToAuthEvents = async () => {
    supabase.auth.onAuthStateChange((_event, _session) => {
      console.log(`Auth event: ${_event}`);
      if(_event === 'SIGNED_OUT') {
        session.value = null
        user.value = null
      } else if(_session) {
        session.value = _session
        user.value = _session.user as User
      }
    })
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if(!error) {
        user.value = data.user
        session.value = data.session
      } else {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if(!error) {
        user.value = data.user
        session.value = data.session
      } else {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      console.log(error)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    user,
    session,
    signIn,
    signUp,
    signOut,
    listenToAuthEvents,
  }
})

export default useAuthStore