import { Helmet } from "react-helmet-async";

interface ArticleMetadataProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type: "article" | "case-study";
  publishedDate: string;
  modifiedDate?: string;
  author: string;
  tags?: string[];
}

const ArticleMetadata = ({
  title,
  description,
  image,
  url,
  type,
  publishedDate,
  modifiedDate,
  author,
  tags = []
}: ArticleMetadataProps) => {
  const fullTitle = `${title} | TechLand`;
  const canonicalUrl = `https://techland.ai${url}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Case Study",
    "headline": title,
    "description": description,
    "image": [image],
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "TechLand",
      "logo": {
        "@type": "ImageObject",
        "url": "https://techland.ai/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(", ")} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="TechLand" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article Metadata */}
      <meta property="article:published_time" content={publishedDate} />
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      <meta property="article:author" content={author} />
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ArticleMetadata;