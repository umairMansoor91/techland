import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  ArrowLeft,
  MapPin,
  Clock,
  Globe,
  Briefcase,
  Code,
  Wrench,
  Terminal,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle2,
  Star,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { getTalentDetail, TalentDetail as TalentDetailType } from "@/lib/api";

const TalentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [talent, setTalent] = useState<TalentDetailType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("client_token");

  useEffect(() => {
    if (!token) {
      navigate("/client-login");
      return;
    }

    if (id) {
      loadTalentDetail(parseInt(id));
    }
  }, [token, id, navigate]);

  const loadTalentDetail = async (talentId: number) => {
    if (!token) return;
    setIsLoading(true);
    setError(null);

    try {
      const data = await getTalentDetail(token, talentId);
      setTalent(data);
    } catch (err) {
      if (err instanceof Error && err.message.includes("token")) {
        localStorage.removeItem("client_token");
        localStorage.removeItem("client_company");
        navigate("/client-login");
      } else {
        setError(err instanceof Error ? err.message : "Failed to load talent details");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) return null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !talent) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <p className="text-destructive mb-4">{error || "Talent not found"}</p>
          <Button onClick={() => navigate("/talent-pool")}>Back to Talent Pool</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <Link
            to="/talent-pool"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Talent Pool
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Profile Header */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {talent.display_name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{talent.display_name}</h1>
                  <p className="text-xl text-primary font-medium">{talent.position_display}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  {talent.years_of_experience}+ years experience
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  {talent.work_mode_display}
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <Globe className="w-3.5 h-3.5 mr-1.5" />
                  {talent.english_proficiency_display} English
                </Badge>
                {talent.willing_to_relocate && (
                  <Badge variant="secondary" className="text-sm py-1 px-3">
                    <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                    Open to Relocation
                  </Badge>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-3">
              <Button size="lg" className="shadow-lg" asChild>
                <a href="/lets-talk-business">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request Introduction
                </a>
              </Button>
              <div className="flex gap-2">
                {talent.github_url && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={talent.github_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {talent.linkedin_url && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={talent.linkedin_url} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {talent.portfolio_url && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={talent.portfolio_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Cards */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-5 text-center bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <div className="text-3xl font-bold gradient-text mb-1">
                {talent.years_of_experience}+
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-5 text-center bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
              <div className="text-3xl font-bold gradient-text mb-1">
                {talent.metrics.total_skills}
              </div>
              <div className="text-sm text-muted-foreground">Technical Skills</div>
            </Card>
            <Card className="p-5 text-center bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="text-3xl font-bold">{talent.metrics.experience_level}</span>
              </div>
              <div className="text-sm text-muted-foreground">Experience Level</div>
            </Card>
            <Card className="p-5 text-center bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-lg font-semibold text-green-600">{talent.metrics.availability_status}</span>
              </div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Skills */}
            <div className="lg:col-span-2 space-y-8">
              {/* Primary Skills */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Primary Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-sm py-1.5 px-3 bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Programming Languages */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-semibold">Programming Languages</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {talent.languages.map((lang, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-sm py-1.5 px-3"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Frameworks & Tools */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl font-semibold">Frameworks & Tools</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {talent.tools.map((tool, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-sm py-1.5 px-3"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Cover Letter / About */}
              {talent.cover_letter && (
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {talent.cover_letter}
                  </p>
                </Card>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Availability Card */}
              <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Available From</span>
                    <span className="font-medium">
                      {new Date(talent.available_from) <= new Date()
                        ? "Immediately"
                        : new Date(talent.available_from).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                    </span>
                  </div>
                  {talent.notice_period && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Notice Period</span>
                      <span className="font-medium">{talent.notice_period}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Work Mode</span>
                    <span className="font-medium">{talent.work_mode_display}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Relocation</span>
                    <span className="font-medium">
                      {talent.willing_to_relocate ? "Open to relocate" : "Not available"}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Experience</span>
                      <span>{talent.years_of_experience} years</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: `${Math.min(talent.years_of_experience * 10, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">English Level</span>
                      <span>{talent.english_proficiency_display}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{
                          width:
                            talent.english_proficiency === "fluent"
                              ? "100%"
                              : talent.english_proficiency === "advanced"
                              ? "75%"
                              : talent.english_proficiency === "intermediate"
                              ? "50%"
                              : "25%",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Technical Breadth</span>
                      <span>{talent.metrics.total_skills} skills</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: `${Math.min(talent.metrics.total_skills * 5, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Links */}
              {(talent.portfolio_url || talent.github_url || talent.linkedin_url) && (
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Links</h3>
                  <div className="space-y-3">
                    {talent.portfolio_url && (
                      <a
                        href={talent.portfolio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="truncate">{talent.portfolio_url.replace(/^https?:\/\//, '')}</span>
                      </a>
                    )}
                    {talent.github_url && (
                      <a
                        href={talent.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="truncate">{talent.github_url.replace(/^https?:\/\//, '')}</span>
                      </a>
                    )}
                    {talent.linkedin_url && (
                      <a
                        href={talent.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="truncate">{talent.linkedin_url.replace(/^https?:\/\//, '')}</span>
                      </a>
                    )}
                  </div>
                </Card>
              )}

              {/* CTA */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <h3 className="font-semibold mb-2">Interested in this candidate?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch with us to request an introduction and discuss your requirements.
                </p>
                <Button className="w-full" asChild>
                  <a href="/lets-talk-business">Request Introduction</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TalentDetail;
