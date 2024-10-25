import {describe, expect, it, vi } from 'vitest'
import { mockNuxtImport, renderSuspended } from '@nuxt/test-utils/runtime'
import MyComponent from './my-component.vue'

mockNuxtImport('useFetch', ()=> () => ({error: ref(null), data: ref(null)}))

it('should succeed',  async () => {
  const { getByText } = await renderSuspended(MyComponent)
  getByText('hello world')
})