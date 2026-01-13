const StatsSection = () => {
  const stats = [
    { number: "100+", label: "AI-Powered Projects Delivered" },
    { number: "30+", label: "Countries Supported" },
    { number: "25+", label: "Active Clients" },
    { number: "5+", label: "Years of Innovation Experience" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Pioneering Trust and <span className="gradient-text">Innovation</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-muted-foreground">
              TechLand's Journey
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We take pride in helping businesses unlock new possibilities with intelligent, AI-driven solutions.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="text-primary text-2xl font-bold mt-1">🔹</div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;