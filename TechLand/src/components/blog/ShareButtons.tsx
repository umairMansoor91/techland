import { useState } from "react";
import { Share2, Twitter, Linkedin, Facebook, Link, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

const ShareButtons = ({ title, url, description = "" }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const fullUrl = `https://techland.ai${url}`;
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <Card className="sticky top-[420px] z-0">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Share2 className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Share this article</h3>
        </div>
        
        <div className="space-y-3">
          <Button
            onClick={() => handleShare('twitter')}
            variant="outline"
            size="sm"
            className="w-full justify-start"
          >
            <Twitter className="w-4 h-4 mr-2 text-blue-500" />
            Twitter
          </Button>
          
          <Button
            onClick={() => handleShare('linkedin')}
            variant="outline"
            size="sm"
            className="w-full justify-start"
          >
            <Linkedin className="w-4 h-4 mr-2 text-blue-700" />
            LinkedIn
          </Button>
          
          <Button
            onClick={() => handleShare('facebook')}
            variant="outline"
            size="sm"
            className="w-full justify-start"
          >
            <Facebook className="w-4 h-4 mr-2 text-blue-600" />
            Facebook
          </Button>
          
          <Button
            onClick={copyToClipboard}
            variant="outline"
            size="sm"
            className="w-full justify-start"
          >
            {copied ? (
              <Check className="w-4 h-4 mr-2 text-green-500" />
            ) : (
              <Link className="w-4 h-4 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShareButtons;