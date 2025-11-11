<script lang="ts">
  // Import any icons you want to use
  import { ArrowRight } from 'lucide-svelte';
  
  // Hero content
  const title = "Hi, I'm Your Name";
  const description = "I build things for the web. Frontend developer focused on creating beautiful, accessible, and performant user experiences.";
  const cta = {
    text: 'View my work',
    href: '#projects'
  };
</script>

<section id="hero" class="py-12 md:py-16 lg:py-20">
  <div class="container">
    <div class="max-w-3xl">
      <h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h1>
      
      <p class="mt-4 text-lg text-muted-foreground md:mt-6 md:text-xl">
        {description}
      </p>
      
      <div class="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <a 
          href={cta.href} 
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {cta.text}
          <ArrowRight class="ml-2 h-4 w-4" />
        </a>
        
        <a 
          href="#contact" 
          class="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Get in touch
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Animation for the hero text */
  h1 {
    background: linear-gradient(
      to right,
      hsl(var(--foreground)),
      hsl(var(--muted-foreground))
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 200% auto;
    animation: gradient 8s ease infinite;
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
