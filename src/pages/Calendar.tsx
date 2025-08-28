import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Plus, Filter } from "lucide-react";
import calendarImage from "@/assets/calendar-feature.jpg";

const Calendar = () => {
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
                <h1 className="text-xl font-semibold text-foreground">Content Calendar</h1>
                <p className="text-sm text-muted-foreground">Plan and schedule your social media content.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="gradient">
                <Plus className="h-4 w-4" />
                Schedule Post
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-secondary/10 to-primary/10 mb-8">
              <div className="absolute inset-0 opacity-30">
                <img 
                  src={calendarImage} 
                  alt="Content Calendar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="relative p-8">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Visual Content Planning
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Organize your content strategy with our intuitive calendar view. Drag and drop posts, see upcoming campaigns, and maintain consistent posting schedules.
                  </p>
                  <Button variant="secondary">
                    <CalendarIcon className="h-4 w-4" />
                    View Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Implementation would go here */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>
                  Your content calendar will be implemented here with full scheduling capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-96 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center">
                  <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">Calendar Coming Soon</h3>
                  <p className="text-muted-foreground">Interactive calendar with drag-and-drop scheduling</p>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Calendar;