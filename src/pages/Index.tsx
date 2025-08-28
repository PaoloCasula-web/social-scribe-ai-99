import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { StatsCard } from "@/components/dashboard/stats-card";
import { RecentPosts } from "@/components/dashboard/recent-posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  BarChart3,
  Plus,
  Sparkles,
  Target,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  const stats = [
    {
      title: "Total Followers",
      value: "24,567",
      change: "+12% from last month",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Engagement Rate",
      value: "8.2%",
      change: "+2.1% from last week",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "Scheduled Posts",
      value: "47",
      change: "Next: Today 3:00 PM",
      changeType: "neutral" as const,
      icon: Calendar,
    },
    {
      title: "Reach This Month",
      value: "125K",
      change: "+23% from last month",
      changeType: "positive" as const,
      icon: BarChart3,
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-card px-6 flex items-center justify-between shadow-card">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden" />
              <div>
                <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back! Here's your social media overview.</p>
              </div>
            </div>
            <Button variant="gradient" className="hidden sm:flex">
              <Plus className="h-4 w-4" />
              Create Post
            </Button>
          </header>

          <main className="flex-1 p-6 space-y-8">
            {/* Hero Section */}
            <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={heroImage} 
                  alt="Social Media Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="relative p-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    AI-Powered Social Media Management
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Schedule posts, generate AI captions, track analytics, and grow your audience across all platforms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="gradient">
                      <Sparkles className="h-4 w-4" />
                      Generate AI Content
                    </Button>
                    <Button variant="outline">
                      <Target className="h-4 w-4" />
                      View Analytics
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Get things done faster with these shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-3">
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <div className="text-left">
                      <div className="font-medium">Schedule Post</div>
                      <div className="text-sm text-muted-foreground">Plan your content</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <div className="text-left">
                      <div className="font-medium">AI Caption</div>
                      <div className="text-sm text-muted-foreground">Generate with AI</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <div className="text-left">
                      <div className="font-medium">View Calendar</div>
                      <div className="text-sm text-muted-foreground">See all posts</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <RecentPosts />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
