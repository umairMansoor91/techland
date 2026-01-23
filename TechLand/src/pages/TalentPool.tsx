import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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
  SlidersHorizontal,
  Code2,
  Terminal,
  Wrench,
  Globe,
  X,
  Clock,
  MapPin,
  Calendar,
  MessageSquare,
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
  const [selectedDeveloper, setSelectedDeveloper] = useState<TalentProfile | null>(null);

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

  // Close drawer on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDeveloper(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

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
                    <TalentCard
                      key={dev.id}
                      developer={dev}
                      onClick={() => setSelectedDeveloper(dev)}
                      isSelected={selectedDeveloper?.id === dev.id}
                    />
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

      {/* Slide-out Drawer */}
      <TalentDrawer
        developer={selectedDeveloper}
        onClose={() => setSelectedDeveloper(null)}
      />
    </div>
  );
};

// Talent Card Component
interface TalentCardProps {
  developer: TalentProfile;
  onClick: () => void;
  isSelected: boolean;
}

const TalentCard = ({ developer, onClick, isSelected }: TalentCardProps) => {
  return (
    <div onClick={onClick} className="block group cursor-pointer">
      <Card className={`p-5 bg-background hover:bg-muted/20 hover:shadow-md transition-all duration-200 border-border/50 hover:border-primary/40 ${isSelected ? 'ring-2 ring-primary border-primary' : ''}`}>
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <h3 className="font-semibold text-base group-hover:text-primary transition-colors truncate">
              {developer.display_name}
            </h3>
            <p className="text-primary/80 text-sm">{developer.position_display}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="px-2 py-0.5 rounded bg-muted text-xs font-medium text-foreground">
              {developer.years_of_experience}+ yrs
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center">
              <Globe className="w-3 h-3 mr-1" />
              {developer.english_proficiency_display}
            </span>
          </div>
        </div>

        {/* Description */}
        {developer.cover_letter && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {developer.cover_letter}
          </p>
        )}

        {/* Tech Stack - Single Row Grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
          {/* Skills */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Code2 className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Skills</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {developer.skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 rounded text-[11px] bg-violet-500 text-white font-medium"
                >
                  {skill}
                </span>
              ))}
              {developer.skills.length > 3 && (
                <span className="text-[11px] text-muted-foreground">+{developer.skills.length - 3}</span>
              )}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Terminal className="w-3.5 h-3.5 text-sky-500" />
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Languages</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {developer.languages.slice(0, 3).map((lang, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 rounded text-[11px] bg-sky-500 text-white font-medium"
                >
                  {lang}
                </span>
              ))}
              {developer.languages.length > 3 && (
                <span className="text-[11px] text-muted-foreground">+{developer.languages.length - 3}</span>
              )}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Wrench className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Frameworks</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {developer.tools.slice(0, 3).map((tool, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 rounded text-[11px] bg-amber-500 text-white font-medium"
                >
                  {tool}
                </span>
              ))}
              {developer.tools.length > 3 && (
                <span className="text-[11px] text-muted-foreground">+{developer.tools.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Slide-out Drawer Component
interface TalentDrawerProps {
  developer: TalentProfile | null;
  onClose: () => void;
}

const TalentDrawer = ({ developer, onClose }: TalentDrawerProps) => {
  if (!developer) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-lg bg-background z-50 shadow-2xl animate-in slide-in-from-right duration-300 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-accent/5">
          <div>
            <h2 className="text-xl font-bold">{developer.display_name}</h2>
            <p className="text-primary font-medium">{developer.position_display}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-semibold">{developer.years_of_experience}+ years</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Globe className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-xs text-muted-foreground">English</p>
                <p className="font-semibold">{developer.english_proficiency_display}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">Work Mode</p>
                <p className="font-semibold">{developer.work_mode_display}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Calendar className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-xs text-muted-foreground">Available</p>
                <p className="font-semibold">
                  {new Date(developer.available_from) <= new Date()
                    ? "Immediately"
                    : new Date(developer.available_from).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          {developer.cover_letter && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">About</h3>
              <p className="text-sm leading-relaxed">{developer.cover_letter}</p>
            </div>
          )}

          {/* Skills */}
          {developer.skills.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-violet-500" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {developer.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-sm bg-violet-500 text-white font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {developer.languages.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-sky-500" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {developer.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-sm bg-sky-500 text-white font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Frameworks */}
          {developer.tools.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Frameworks & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {developer.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-sm bg-amber-500 text-white font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Relocation */}
          {developer.willing_to_relocate && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Open to relocation</span>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t bg-muted/30">
          <Button className="w-full" size="lg" asChild>
            <a href="/lets-talk-business">
              <MessageSquare className="w-4 h-4 mr-2" />
              Request Introduction
            </a>
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            We'll connect you with this candidate within 24 hours
          </p>
        </div>
      </div>
    </>
  );
};

export default TalentPool;
