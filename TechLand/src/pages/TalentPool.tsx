import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  LogOut,
  Search,
  Github,
  Linkedin,
  ExternalLink,
  Users,
  ArrowRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  getTalentPool,
  getTalentFilters,
  clientLogout,
  TalentProfile,
  TalentFilters,
} from "@/lib/api";

const TalentPool = () => {
  const navigate = useNavigate();
  const [talent, setTalent] = useState<TalentProfile[]>([]);
  const [filters, setFilters] = useState<TalentFilters | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState<string>("");

  // Filter state
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [skillSearch, setSkillSearch] = useState<string>("");

  const token = localStorage.getItem("client_token");

  useEffect(() => {
    if (!token) {
      navigate("/client-login");
      return;
    }

    setCompanyName(localStorage.getItem("client_company") || "");
    loadFilters();
    loadTalent();
  }, [token, navigate]);

  const loadFilters = async () => {
    if (!token) return;
    try {
      const data = await getTalentFilters(token);
      setFilters(data);
    } catch (err) {
      console.error("Failed to load filters:", err);
    }
  };

  const loadTalent = async () => {
    if (!token) return;
    setIsLoading(true);
    setError(null);

    try {
      const data = await getTalentPool(token, {
        position: selectedPosition && selectedPosition !== "all" ? selectedPosition : undefined,
        work_mode: selectedWorkMode && selectedWorkMode !== "all" ? selectedWorkMode : undefined,
        min_experience: selectedExperience && selectedExperience !== "0" ? parseInt(selectedExperience) : undefined,
        skill: skillSearch || undefined,
      });
      setTalent(data.talent);
    } catch (err) {
      if (err instanceof Error && err.message.includes("token")) {
        handleLogout();
      } else {
        setError(err instanceof Error ? err.message : "Failed to load talent pool");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    if (token) {
      try {
        await clientLogout(token);
      } catch {
        // Ignore logout errors
      }
    }
    localStorage.removeItem("client_token");
    localStorage.removeItem("client_company");
    navigate("/client-login");
  };

  const handleSearch = () => {
    loadTalent();
  };

  const clearFilters = () => {
    setSelectedPosition("all");
    setSelectedWorkMode("all");
    setSelectedExperience("0");
    setSkillSearch("");
    setTimeout(loadTalent, 0);
  };

  const hasActiveFilters =
    (selectedPosition && selectedPosition !== "all") ||
    (selectedWorkMode && selectedWorkMode !== "all") ||
    (selectedExperience && selectedExperience !== "0") ||
    skillSearch;

  if (!token) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-6 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Client Portal</p>
              <h1 className="text-2xl font-semibold">
                Welcome back, <span className="gradient-text">{companyName}</span>
              </h1>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Developer List (70%) */}
            <div className="lg:w-[70%]">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-medium">Available Talent</h2>
                  <p className="text-sm text-muted-foreground">
                    {isLoading ? "Loading..." : `${talent.length} developers match your criteria`}
                  </p>
                </div>
              </div>

              {/* Developer Cards */}
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                </div>
              ) : error ? (
                <Card className="p-12 text-center">
                  <p className="text-destructive mb-4">{error}</p>
                  <Button onClick={loadTalent} variant="outline">Try Again</Button>
                </Card>
              ) : talent.length === 0 ? (
                <Card className="p-12 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground/40" />
                  <h3 className="font-medium mb-2">No developers found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Try adjusting your filters to see more results
                  </p>
                  {hasActiveFilters && (
                    <Button variant="outline" size="sm" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  )}
                </Card>
              ) : (
                <div className="space-y-4">
                  {talent.map((dev) => (
                    <TalentCard key={dev.id} developer={dev} />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Filters (30%) */}
            <div className="lg:w-[30%]">
              <div className="lg:sticky lg:top-24">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                      <h3 className="font-medium">Filters</h3>
                    </div>
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  <div className="space-y-5">
                    {/* Skill Search */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Search Skills</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="React, Python, AWS..."
                          value={skillSearch}
                          onChange={(e) => setSkillSearch(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                          className="pl-9"
                        />
                      </div>
                    </div>

                    {/* Position Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Role</label>
                      <Select value={selectedPosition || "all"} onValueChange={setSelectedPosition}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Roles" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Roles</SelectItem>
                          {filters?.positions.map((pos) => (
                            <SelectItem key={pos.value} value={pos.value}>
                              {pos.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Work Mode Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Work Mode</label>
                      <Select value={selectedWorkMode || "all"} onValueChange={setSelectedWorkMode}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any</SelectItem>
                          {filters?.work_modes.map((mode) => (
                            <SelectItem key={mode.value} value={mode.value}>
                              {mode.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Experience Filter */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Experience</label>
                      <Select value={selectedExperience || "0"} onValueChange={setSelectedExperience}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          {filters?.experience_levels.map((exp) => (
                            <SelectItem key={exp.value} value={exp.value.toString()}>
                              {exp.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Apply Button */}
                    <Button onClick={handleSearch} className="w-full">
                      Apply Filters
                    </Button>
                  </div>
                </Card>

                {/* Help Card */}
                <Card className="p-5 mt-4 bg-primary/5 border-primary/10">
                  <h4 className="font-medium text-sm mb-2">Need help finding talent?</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Our team can help you identify the perfect candidates for your requirements.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="/lets-talk-business">Contact Us</a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const TalentCard = ({ developer }: { developer: TalentProfile }) => {
  return (
    <Card className="p-6 bg-background hover:shadow-md transition-all duration-200 border-border/50 hover:border-primary/20">
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl font-semibold text-primary">
            {developer.display_name.charAt(0)}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-lg leading-tight">{developer.display_name}</h3>
              <p className="text-primary font-medium text-sm">{developer.position_display}</p>
            </div>
            <Badge variant="secondary" className="self-start text-xs px-2.5 py-1">
              {developer.years_of_experience}+ years
            </Badge>
          </div>

          {/* Description */}
          {developer.cover_letter && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {developer.cover_letter}
            </p>
          )}

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {developer.skills.slice(0, 6).map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {developer.skills.length > 6 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground">
                +{developer.skills.length - 6} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            {/* Social Links */}
            <div className="flex items-center gap-1">
              {developer.github_url && (
                <a
                  href={developer.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {developer.linkedin_url && (
                <a
                  href={developer.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {developer.portfolio_url && (
                <a
                  href={developer.portfolio_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* View Profile Button */}
            <Button variant="ghost" size="sm" className="group" asChild>
              <Link to={`/talent-pool/${developer.id}`}>
                View Profile
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TalentPool;
