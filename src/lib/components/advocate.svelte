<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
  
  // Advocacy areas - customize these with your specific causes
  const advocacyAreas = [
    {
      title: 'Open Source',
      description: 'Championing open-source software and community contributions',
      icon: '💻',
      tags: ['FOSS', 'Community', 'Mentorship']
    },
    {
      title: 'Diversity in Tech',
      description: 'Promoting diversity and inclusion in the technology industry',
      icon: '🌍',
      tags: ['Inclusion', 'Equity', 'Outreach']
    },
    {
      title: 'Digital Privacy',
      description: 'Advocating for online privacy rights and data protection',
      icon: '🔒',
      tags: ['Security', 'Rights', 'Awareness']
    }
  ];
  
  // Customize this section with your personal advocacy statement
  const advocacyStatement = {
    title: 'Advocacy & Community Engagement',
    description: 'I believe in using technology as a force for good. Through my work, I strive to create positive change by advocating for open knowledge, digital rights, and inclusive communities.'
  };
</script>

<section id="advocacy" class="py-12 md:py-16 lg:py-20 bg-muted/50">
  <div class="container">
    <div class="text-center mb-12">
      <Badge variant="secondary" class="mb-4 text-sm font-medium">Advocacy</Badge>
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {advocacyStatement.title}
      </h2>
      <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
        {advocacyStatement.description}
      </p>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each advocacyAreas as area}
        <Card class="h-full transition-all hover:shadow-md hover:border-primary/20">
          <CardHeader>
            <div class="flex items-center gap-4">
              <div class="rounded-full bg-primary/10 p-3 text-2xl">
                {area.icon}
              </div>
              <CardTitle class="text-xl">{area.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription class="mb-4">
              {area.description}
            </CardDescription>
            <div class="flex flex-wrap gap-2">
              {#each area.tags as tag}
                <Badge variant="outline" class="text-xs">
                  {tag}
                </Badge>
              {/each}
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
    
    <!-- Call to Action -->
    <div class="mt-12 text-center">
      <p class="mb-6 text-muted-foreground">
        Interested in collaborating on advocacy initiatives or learning more about my work?
      </p>
      <a 
        href="#contact" 
        class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Get in Touch
      </a>
    </div>
  </div>
</section>

<style>
  /* Smooth hover effect for cards */
  .card-hover {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .card-hover:hover {
    transform: translateY(-4px);
  }
  
  /* Gradient underline for section title */
  h2 {
    display: inline-block;
    background-image: linear-gradient(90deg, #6366f1, #8b5cf6);
    background-size: 0% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 0.3s ease;
  }
  
  h2:hover {
    background-size: 100% 3px;
  }
</style>
