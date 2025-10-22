'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Factory, TrendingUp, Shield, Zap } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  badge: 'Industry 4.0 Ready',
  mainTitle: 'Transform Your Manufacturing',
  mainTitleHighlight: 'Operations Today',
  description:
    "Join leading manufacturers who've increased efficiency by 40% with our cutting-edge Manufacturing Execution System. Real-time visibility, predictive analytics, and seamless integration.",
  primaryCTA: 'Start Free Trial',
  primaryCTAHref: '/contact',
  secondaryCTA: 'Schedule Demo',
  secondaryCTAHref: '/about',
  trustText: 'Trusted by Fortune 500 manufacturers worldwide',
  stat1Value: '40%',
  stat1Label: 'Efficiency Gain',
  stat2Value: '99.8%',
  stat2Label: 'System Uptime',
  stat3Value: '500+',
  stat3Label: 'Plants Connected',
  stat4Value: '24/7',
  stat4Label: 'Smart Monitoring',
  feature1Title: '30-Day Free Trial',
  feature1Description: 'Full system access, no commitment required',
  feature2Title: 'Enterprise Security',
  feature2Description: 'ISO 27001 certified with end-to-end encryption',
  feature3Title: 'Rapid Deployment',
  feature3Description: 'Go live in weeks, not months with our proven methodology',
} as const;

type CTAProps = Partial<typeof DEFAULT_CTA>;

export default function Cta(props: CTAProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();

  const stats = [
    { value: config.stat1Value, label: config.stat1Label, icon: TrendingUp },
    { value: config.stat2Value, label: config.stat2Label, icon: Shield },
    { value: config.stat3Value, label: config.stat3Label, icon: Factory },
    { value: config.stat4Value, label: config.stat4Label, icon: Zap },
  ];

  const features = [
    {
      title: config.feature1Title,
      description: config.feature1Description,
      icon: null,
      bgColor: 'bg-accent/10',
      iconColor: 'bg-accent',
    },
    {
      title: config.feature2Title,
      description: config.feature2Description,
      icon: Shield,
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      title: config.feature3Title,
      description: config.feature3Description,
      icon: Zap,
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent mb-8">
                <Factory className="size-4 mr-2" />
                <span data-editable="badge">{config.badge}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span data-editable="mainTitle">{config.mainTitle}</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="group text-base px-8 py-4 bg-primary hover:bg-primary/90"
                  onClick={() => navigate(config.primaryCTAHref)}
                  data-editable-href="primaryCTAHref"
                  data-href={config.primaryCTAHref}
                >
                  <span data-editable="primaryCTA">{config.primaryCTA}</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4 border-primary/20 hover:bg-primary/5"
                  onClick={() => navigate(config.secondaryCTAHref)}
                  data-editable-href="secondaryCTAHref"
                  data-href={config.secondaryCTAHref}
                >
                  <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  <span data-editable="trustText">{config.trustText}</span>
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Manufacturing company logos placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        <span data-editable={`stat${index + 1}Value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="space-y-2">
                  <div
                    className={`size-12 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}
                  >
                    {Icon ? (
                      <Icon className={`size-6 ${feature.iconColor}`} />
                    ) : (
                      <div className={`size-6 rounded-full ${feature.iconColor}`} />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
