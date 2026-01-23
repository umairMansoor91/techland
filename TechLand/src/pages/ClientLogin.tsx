import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Loader2, Lock, Building2, Users } from "lucide-react";
import { clientLogin } from "@/lib/api";

const ClientLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await clientLogin(email, password);
      // Store token and company name in localStorage
      localStorage.setItem("client_token", response.token);
      localStorage.setItem("client_company", response.company_name);
      // Redirect to talent pool
      navigate("/talent-pool");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4">Client Portal</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Access Your <span className="gradient-text">Talent Pool</span>
              </h1>
              <p className="text-muted-foreground">
                Sign in to browse pre-vetted developers for your IT staff augmentation needs.
              </p>
            </div>

            <Card className="p-6 md:p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="company@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    {error}
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Sign In
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="/lets-talk-business" className="text-primary hover:underline">
                    Contact us
                  </a>{" "}
                  to get started.
                </p>
              </div>
            </Card>

            {/* Features */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-medium text-sm">Pre-Vetted Talent</h3>
                <p className="text-xs text-muted-foreground">Screened and verified developers</p>
              </div>
              <div className="text-center p-4">
                <Lock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-medium text-sm">Secure Access</h3>
                <p className="text-xs text-muted-foreground">Protected candidate information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientLogin;
