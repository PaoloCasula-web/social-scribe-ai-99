import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MoreHorizontal, Instagram, Facebook, Linkedin } from "lucide-react";

interface PostCardProps {
  id: string;
  content: string;
  scheduledTime: string;
  status: "scheduled" | "published" | "draft";
  platforms: ("instagram" | "facebook" | "linkedin")[];
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
};

const statusColors = {
  scheduled: "bg-secondary text-secondary-foreground",
  published: "bg-accent text-accent-foreground",
  draft: "bg-muted text-muted-foreground"
};

export function PostCard({ content, scheduledTime, status, platforms, engagement }: PostCardProps) {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth border-0 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Badge className={statusColors[status]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-foreground line-clamp-3">{content}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(scheduledTime).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{new Date(scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {platforms.map((platform) => {
              const Icon = platformIcons[platform];
              return (
                <div
                  key={platform}
                  className="w-6 h-6 rounded-full bg-muted flex items-center justify-center"
                >
                  <Icon className="h-3 w-3" />
                </div>
              );
            })}
          </div>
          
          {engagement && status === "published" && (
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{engagement.likes} likes</span>
              <span>{engagement.comments} comments</span>
              <span>{engagement.shares} shares</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}