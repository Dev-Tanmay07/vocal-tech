import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Mic2, Plus, Folder, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const usagePercentage = 23; // Mock data

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
            <Link to="/dashboard" className="text-sm font-medium">Dashboard</Link>
            <Link to="/studio" className="text-sm font-medium text-muted-foreground">Studio</Link>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground">Pricing</Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card className="border-border/50 p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Credits Used</span>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mb-2 text-2xl font-bold">2,341 / 10,000</div>
            <Progress value={usagePercentage} className="h-2" />
          </Card>

          <Card className="border-border/50 p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Projects</span>
              <Folder className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">Active projects</p>
          </Card>

          <Card className="border-border/50 p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Current Plan</span>
              <Mic2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">Free</div>
            <Button asChild variant="link" className="h-auto p-0 text-sm text-primary">
              <Link to="/pricing">Upgrade plan</Link>
            </Button>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group cursor-pointer border-border/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Plus className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">New Project</h3>
              <p className="text-sm text-muted-foreground">Start a new TTS project</p>
            </Card>

            <Card className="group cursor-pointer border-border/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mic2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Clone Voice</h3>
              <p className="text-sm text-muted-foreground">Create a voice clone</p>
            </Card>

            <Card className="group cursor-pointer border-border/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Transcribe</h3>
              <p className="text-sm text-muted-foreground">Speech-to-text conversion</p>
            </Card>

            <Card className="group cursor-pointer border-border/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Folder className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">View Projects</h3>
              <p className="text-sm text-muted-foreground">Access all your work</p>
            </Card>
          </div>
        </div>

        {/* Recent Projects */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Recent Projects</h2>
          <Card className="border-border/50">
            <div className="divide-y divide-border">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Folder className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Project {i}</h3>
                      <p className="text-sm text-muted-foreground">Last edited 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Open</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
