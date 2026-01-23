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
  Users,
  ArrowRight,
  SlidersHorizontal,
  Code2,
  Terminal,
  Wrench,
  Globe,
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
    <Card className="group p-0 bg-background hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/30 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-white shadow-md">
            {developer.display_name.charAt(0)}
          </div>

          {/* Name & Role */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-xl tracking-tight mb-0.5">{developer.display_name}</h3>
            <p className="text-primary font-semibold">{developer.position_display}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {developer.years_of_experience}+ years
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                <Globe className="w-3 h-3 mr-1" />
                {developer.english_proficiency_display}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        {developer.cover_letter && (
          <p className="text-[15px] text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
            {developer.cover_letter}
          </p>
        )}

        {/* Skills Sections */}
        <div className="space-y-4">
          {/* Primary Skills */}
          {developer.skills.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {developer.skills.slice(0, 5).map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {developer.skills.length > 5 && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                    +{developer.skills.length - 5} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Languages */}
          {developer.languages.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Languages</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {developer.languages.slice(0, 5).map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium"
                  >
                    {lang}
                  </span>
                ))}
                {developer.languages.length > 5 && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                    +{developer.languages.length - 5} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Frameworks & Tools */}
          {developer.tools.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {developer.tools.slice(0, 5).map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
                {developer.tools.length > 5 && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                    +{developer.tools.length - 5} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end pt-5 mt-5 border-t border-border/40">
          <Button size="sm" className="group/btn shadow-sm" asChild>
            <Link to={`/talent-pool/${developer.id}`}>
              View Full Profile
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TalentPool;
