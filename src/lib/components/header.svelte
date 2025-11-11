<script lang="ts">
  import { Moon, Sun } from 'lucide-svelte';
  
  // Theme toggle logic
  let isDark = false;
  
  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  // Check saved theme preference
  if (typeof window !== 'undefined') {
    isDark = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }
  
  // Navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
</script>

<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container flex h-14 items-center justify-between">
    <a href="/" class="flex items-center space-x-2 font-medium">
      <span class="font-bold">YourName</span>
      <span class="text-muted-foreground hidden sm:inline">.dev</span>
    </a>
    
    <nav class="flex items-center space-x-4">
      {#each navItems as item}
        <a 
          href={item.href}
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.name}
        </a>
      {/each}
      
      <button
        type="button"
        on:click={toggleTheme}
        class="rounded-md p-2 text-muted-foreground hover:bg-muted"
        aria-label="Toggle theme"
      >
        {#if isDark}
          <Sun class="h-4 w-4" />
        {:else}
          <Moon class="h-4 w-4" />
        {/if}
      </button>
    </nav>
  </div>
</header>

<style>
  /* Smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
  }
  
  /* Focus styles */
  a:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    border-radius: 0.25rem;
  }
</style>
