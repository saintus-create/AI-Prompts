<script lang="ts">
  import { buttonVariants, type Variant, type Size } from './index.js'
  import { cn } from '$lib/utils.js'
  
  export let variant: Variant = 'default'
  export let size: Size = 'default'
  export let class: string = ''
  export let gradient: boolean = false
  export let animate: boolean = false
  export let fullWidth: boolean = false
  export let disabled: boolean = false
  
  const baseClasses = buttonVariants({ variant, size })
  const gradientClasses = 'bg-gradient-to-r from-[hsl(var(--color-one))] via-[hsl(var(--color-two))] to-[hsl(var(--color-three))] text-white border-none hover:opacity-90'
  const animateClasses = 'bg-300% animate-gradient'
</script>

<button
  class={cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    fullWidth && 'w-full',
    gradient ? gradientClasses : baseClasses,
    gradient && animate && animateClasses,
    class
  )}
  disabled={disabled}
  on:click
  on:keydown
>
  <span class="relative z-10">
    <slot />
  </span>
  
  {#if gradient}
    <span class="absolute inset-0 bg-background/10 backdrop-blur-sm rounded-md" />
  {/if}
</button>
