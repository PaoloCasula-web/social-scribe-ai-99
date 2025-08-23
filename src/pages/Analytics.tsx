import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/dashboard/stats-card";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  Download,
  Calendar
} from "lucide-react";
import analyticsImage from "@/assets/analytics-feature.jpg";

const Analytics = () => {
  const detailedStats = [
    {
      title: "Total Reach",
      value: "856K",
      change: "+18% vs last period",
      changeType: "positive" as const,
      icon: Eye,
    },
    {
      title: "Engagement Rate",
      value: "7.8%",
      change: "+1.2% vs last period",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "New Followers",
      value: "2,347",
      change: "+25% vs last period",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Click-through Rate",
      value: "3.2%",
      change: "-0.5% vs last period",
      changeType: "negative" as const,
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
                <h1 className="text-xl font-semibold text-foreground">Analytics</h1>
                <p className="text-sm text-muted-foreground">Track your social media performance and insights.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Calendar className="h-4 w-4" />
                Date Range
              </Button>
              <Button variant="success">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-8">
            {/* Hero Section */}
            <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
              <div className="absolute inset-0 opacity-30">
                <img 
                  src={analyticsImage} 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="relative p-8">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Performance Analytics
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Get detailed insights into your social media performance with comprehensive analytics and reporting tools.
                  </p>
                  <Button variant="success">
                    <TrendingUp className="h-4 w-4" />
                    View Detailed Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {detailedStats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Engagement Over Time</CardTitle>
                  <CardDescription>
                    Track your engagement trends across all platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">Charts Coming Soon</h3>
                    <p className="text-muted-foreground">Interactive analytics charts</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>
                    Compare performance across different platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">Platform Breakdown</h3>
                    <p className="text-muted-foreground">Detailed platform analytics</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Performing Posts */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>
                  Your best content from the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">Post #{i}</h4>
                        <p className="text-sm text-muted-foreground">Sample post content preview...</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-accent">{1000 - (i * 200)} likes</div>
                        <div className="text-sm text-muted-foreground">{100 - (i * 20)} comments</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;