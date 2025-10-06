import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Mic2, Play, Download, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Studio = () => {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState([1]);
  const [pitch, setPitch] = useState([1]);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Mic2 className="h-5 w-5 text-white" />
            </div>
            VoiceStudio
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground">Dashboard</Link>
            <Link to="/studio" className="text-sm font-medium">Studio</Link>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground">Pricing</Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Studio</h1>
          <p className="text-muted-foreground">Create professional voice content with AI</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 p-6">
              <div className="mb-6">
                <Label htmlFor="text-input" className="mb-2 block text-base font-semibold">
                  Enter your text
                </Label>
                <Textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type or paste your text here to convert it to speech..."
                  className="min-h-[300px] resize-none"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  {text.length} characters • Estimated credits: {Math.ceil(text.length / 10)}
                </p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Generate Speech
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            <Card className="border-border/50 p-6">
              <div className="mb-6 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Voice Settings</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="voice-select" className="mb-2 block">Voice</Label>
                  <Select defaultValue="alloy">
                    <SelectTrigger id="voice-select">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alloy">Alloy (Neutral)</SelectItem>
                      <SelectItem value="echo">Echo (Male)</SelectItem>
                      <SelectItem value="fable">Fable (Female)</SelectItem>
                      <SelectItem value="onyx">Onyx (Deep Male)</SelectItem>
                      <SelectItem value="nova">Nova (Warm Female)</SelectItem>
                      <SelectItem value="shimmer">Shimmer (Soft Female)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language-select" className="mb-2 block">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language-select">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="it">Italian</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Label>Speed</Label>
                    <span className="text-sm text-muted-foreground">{speed[0].toFixed(1)}x</span>
                  </div>
                  <Slider
                    value={speed}
                    onValueChange={setSpeed}
                    min={0.5}
                    max={2}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Label>Pitch</Label>
                    <span className="text-sm text-muted-foreground">{pitch[0].toFixed(1)}x</span>
                  </div>
                  <Slider
                    value={pitch}
                    onValueChange={setPitch}
                    min={0.5}
                    max={2}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
              <h3 className="mb-2 font-semibold">Upgrade for more features</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Unlock professional voice cloning, higher quality audio, and advanced settings
              </p>
              <Button asChild variant="default" className="w-full">
                <Link to="/pricing">View Plans</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
