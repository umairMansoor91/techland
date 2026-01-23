import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Briefcase,
  MapPin,
  Clock,
  Code,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Users,
  Filter,
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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Badge className="mb-2">Client Portal</Badge>
              <h1 className="text-2xl md:text-3xl font-bold">
                Welcome, <span className="gradient-text">{companyName}</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                Browse our pre-vetted talent pool for your team
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Position Filter */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Role</label>
                <Select value={selectedPosition || "all"} onValueChange={setSelectedPosition}>
                  <SelectTrigger className="h-9">
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
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Work Mode</label>
                <Select value={selectedWorkMode || "all"} onValueChange={setSelectedWorkMode}>
                  <SelectTrigger className="h-9">
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
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Experience</label>
                <Select value={selectedExperience || "0"} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="h-9">
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

              {/* Skill Search */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Skill</label>
                <Input
                  placeholder="e.g., React, Python"
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="h-9"
                />
              </div>
            </div>

            <div className="flex gap-2">
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
              <Button onClick={handleSearch} size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={loadTalent}>Try Again</Button>
            </div>
          ) : talent.length === 0 ? (
            <div className="text-center py-20">
              <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-xl font-semibold mb-2">No Talent Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to see more results.
              </p>
              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{talent.length}</span> developers found
                </p>
                {hasActiveFilters && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="w-4 h-4" />
                    Filters applied
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {talent.map((dev) => (
                  <TalentCard key={dev.id} developer={dev} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const TalentCard = ({ developer }: { developer: TalentProfile }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/30">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{developer.display_name}</h3>
          <p className="text-primary font-medium">{developer.position_display}</p>
        </div>
        <Badge variant="secondary" className="text-xs">
          {developer.years_of_experience}+ yrs
        </Badge>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{developer.work_mode_display}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe className="w-4 h-4" />
          <span>{developer.english_proficiency_display}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>
            Available{" "}
            {new Date(developer.available_from) <= new Date()
              ? "Now"
              : new Date(developer.available_from).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
          </span>
        </div>
        {developer.willing_to_relocate && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="w-4 h-4" />
            <span>Can Relocate</span>
          </div>
        )}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">Skills</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {developer.skills.slice(0, 5).map((skill, idx) => (
            <Badge key={idx} variant="outline" className="text-xs font-normal">
              {skill}
            </Badge>
          ))}
          {developer.skills.length > 5 && (
            <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
              +{developer.skills.length - 5}
            </Badge>
          )}
        </div>
      </div>

      {/* Languages */}
      {developer.languages.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-1.5">Languages</p>
          <p className="text-sm">{developer.languages.slice(0, 4).join(", ")}</p>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-2 pt-4 border-t">
        {developer.github_url && (
          <a
            href={developer.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {developer.linkedin_url && (
          <a
            href={developer.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {developer.portfolio_url && (
          <a
            href={developer.portfolio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <div className="flex-1" />
        <Button size="sm" variant="outline" asChild>
          <a href="/lets-talk-business">Interested</a>
        </Button>
      </div>
    </Card>
  );
};

export default TalentPool;
