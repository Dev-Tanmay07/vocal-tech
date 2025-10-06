import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mic, AudioWaveform, Languages, Sparkles, Zap, Shield } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Ultra-realistic AI voices in 32+ languages</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              The AI Voice Studio
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Built for Creators
              </span>
            </h1>
            
            <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
              Generate ultra-human voices, clone your own, dub videos, and build conversational AI—all in one powerful platform.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/auth">Start Creating Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Everything you need to create</h2>
          <p className="text-lg text-muted-foreground">Professional-grade tools for every voice project</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group border-border/50 bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mic className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Text-to-Speech</h3>
            <p className="text-muted-foreground">
              Generate ultra-realistic speech with 1000+ voices across 32+ languages. Adjust prosody, speed, and pitch.
            </p>
          </Card>

          <Card className="group border-border/50 bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <AudioWaveform className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Voice Cloning</h3>
            <p className="text-muted-foreground">
              Clone any voice instantly or create professional-grade clones with our multi-sample training.
            </p>
          </Card>

          <Card className="group border-border/50 bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Languages className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Dubbing Studio</h3>
            <p className="text-muted-foreground">
              Automatically dub videos with lip-sync accuracy. Import subtitles and export with embedded audio.
            </p>
          </Card>

          <Card className="group border-border/50 bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Conversational AI</h3>
            <p className="text-muted-foreground">
              Build voice-based chatbots with persistent context. Add webchat widgets to your website.
            </p>
          </Card>

          <Card className="group border-border/50 bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Speech-to-Text</h3>
            <p className="text-muted-foreground">
              High-accuracy transcription with speaker diarization, timestamps, and downloadable transcripts.
            </p>
          </Card>

          <Card className="group border-border/50 bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Enterprise Ready</h3>
            <p className="text-muted-foreground">
              SSO, HIPAA BAA, custom SLAs, and dedicated support for teams and enterprises.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-primary to-accent p-12 text-center text-white">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to transform your audio?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of creators, podcasters, and businesses creating with AI voices
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/auth">Get Started Free</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Landing;
