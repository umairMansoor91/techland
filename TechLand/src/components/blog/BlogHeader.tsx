import { User, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogHeaderProps {
  title: string;
  description: string;
  author: string;
  readingTime: string;
  category: "Blog" | "Case Study";
  tags?: string[];
  image: string;
  imageAlt: string;
}

const BlogHeader = ({
  title,
  description,
  author,
  readingTime,
  category,
  tags = [],
  image,
  imageAlt
}: BlogHeaderProps) => {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge
              variant={category === "Blog" ? "default" : "secondary"}
              className="px-4 py-2 text-sm font-medium"
            >
              {category}
            </Badge>

            <div className="flex flex-wrap items-center text-muted-foreground text-sm gap-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} read</span>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Title and Description */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          
          {/* Hero Image */}
          <div className="relative group mb-12">
            <img 
              src={image}
              alt={imageAlt}
              className="w-full h-64 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;