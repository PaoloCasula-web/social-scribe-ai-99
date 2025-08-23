import { PostCard } from "./post-card";

const mockPosts = [
  {
    id: "1",
    content: "🚀 Excited to share our latest product update! New AI features that will revolutionize your social media strategy. What do you think? #AI #SocialMedia #Innovation",
    scheduledTime: "2024-08-24T10:00:00Z",
    status: "scheduled" as const,
    platforms: ["instagram", "linkedin"] as ("instagram" | "facebook" | "linkedin")[],
  },
  {
    id: "2",
    content: "Behind the scenes at our office today! Our team is working on something amazing 👨‍💻👩‍💻 Stay tuned for updates! #TeamWork #BehindTheScenes",
    scheduledTime: "2024-08-23T15:30:00Z",
    status: "published" as const,
    platforms: ["facebook", "instagram"] as ("instagram" | "facebook" | "linkedin")[],
    engagement: {
      likes: 127,
      comments: 23,
      shares: 8,
    },
  },
  {
    id: "3",
    content: "Quick tip Tuesday: Did you know that posting at optimal times can increase engagement by up to 60%? 📈 Our AI analyzes the best times for YOUR audience specifically.",
    scheduledTime: "2024-08-25T14:00:00Z",
    status: "draft" as const,
    platforms: ["linkedin"] as ("instagram" | "facebook" | "linkedin")[],
  },
  {
    id: "4",
    content: "Weekend vibes! 🌟 Remember to take breaks and recharge. Productivity comes from well-rested minds. What are your weekend plans?",
    scheduledTime: "2024-08-22T12:00:00Z",
    status: "published" as const,
    platforms: ["instagram", "facebook", "linkedin"] as ("instagram" | "facebook" | "linkedin")[],
    engagement: {
      likes: 89,
      comments: 15,
      shares: 4,
    },
  },
];

export function RecentPosts() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Recent Posts</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {mockPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}