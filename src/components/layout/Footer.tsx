'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'Manufacturing',
  companyDescription:
    'Leading industrial manufacturing solutions with precision engineering and cutting-edge technology. Trusted by Fortune 500 companies worldwide for quality, reliability, and innovation in manufacturing excellence.',
  contactEmail: 'info@manufacturing.com',
  contactPhone: '+1 (555) 847-2900',
  contactAddress: '2500 Industrial Blvd, Manufacturing District',
  newsletterTitle: 'Industry Updates',
  newsletterPlaceholder: 'Enter your business email',
  newsletterDisclaimer:
    'Get manufacturing insights, industry trends, and product updates. Unsubscribe anytime.',
  section1Title: 'Solutions',
  section2Title: 'Company',
  section3Title: 'Support',
  section4Title: 'Compliance',
  copyrightText: '© 2024 Manufacturing. All rights reserved.',
  madeWithText: 'by our engineering team',
  socialText: 'Connect with us:',
  social1Href: 'https://twitter.com/manufacturing',
  social2Href: 'https://facebook.com/manufacturing',
  social3Href: 'https://instagram.com/manufacturing',
  social4Href: 'https://linkedin.com/company/manufacturing',
  social5Href: 'https://github.com/manufacturing',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // ✅ FIXED: Added editableId to all footer links
  const footerSections = [
    {
      title: config.section1Title,
      links: [
        { name: 'Automation Systems', href: '/automation', editableId: 'link-footer-automation' },
        { name: 'Quality Control', href: '/quality-control', editableId: 'link-footer-quality' },
        {
          name: 'Custom Manufacturing',
          href: '/custom-manufacturing',
          editableId: 'link-footer-custom',
        },
        { name: 'Supply Chain', href: '/supply-chain', editableId: 'link-footer-supply' },
        { name: 'Industrial IoT', href: '/industrial-iot', editableId: 'link-footer-iot' },
        { name: 'Technical Specs', href: '/specifications', editableId: 'link-footer-specs' },
      ],
    },
    {
      title: config.section2Title,
      links: [
        { name: 'About', href: '/about', editableId: 'link-footer-about' },
        { name: 'Manufacturing News', href: '/news', editableId: 'link-footer-news' },
        { name: 'Careers', href: '/careers', editableId: 'link-footer-careers' },
        { name: 'Facilities', href: '/facilities', editableId: 'link-footer-facilities' },
        { name: 'Partners', href: '/partners', editableId: 'link-footer-partners' },
        { name: 'Contact', href: '/contact', editableId: 'link-footer-contact' },
      ],
    },
    {
      title: config.section3Title,
      links: [
        { name: 'Technical Support', href: '/support', editableId: 'link-footer-support' },
        { name: 'Training Center', href: '/training', editableId: 'link-footer-training' },
        { name: 'Documentation', href: '/documentation', editableId: 'link-footer-docs' },
        { name: 'Maintenance', href: '/maintenance', editableId: 'link-footer-maintenance' },
        { name: 'Warranty', href: '/warranty', editableId: 'link-footer-warranty' },
        { name: 'Service Status', href: '/service-status', editableId: 'link-footer-status' },
      ],
    },
    {
      title: config.section4Title,
      links: [
        { name: 'Privacy Policy', href: '/privacy', editableId: 'link-footer-privacy' },
        { name: 'Terms of Service', href: '/terms', editableId: 'link-footer-terms' },
        { name: 'ISO Certifications', href: '/certifications', editableId: 'link-footer-iso' },
        { name: 'Safety Standards', href: '/safety', editableId: 'link-footer-safety' },
        { name: 'Environmental', href: '/environmental', editableId: 'link-footer-environmental' },
        { name: 'Export Compliance', href: '/export-compliance', editableId: 'link-footer-export' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href },
    { name: 'Facebook', icon: Facebook, href: config.social2Href },
    { name: 'Instagram', icon: Instagram, href: config.social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href },
    { name: 'GitHub', icon: Github, href: config.social5Href },
  ];

  // ✅ FIXED: Added editableId to bottom bar links
  const bottomLinks = [
    { name: 'Site Map', href: '/sitemap', editableId: 'link-footer-sitemap' },
    { name: 'Accessibility', href: '/accessibility', editableId: 'link-footer-accessibility' },
    { name: 'Cookie Preferences', href: '/cookies', editableId: 'link-footer-cookie-settings' },
    {
      name: 'Customer Support',
      href: '/customer-support',
      editableId: 'link-footer-customer-support',
    },
  ];

  return (
    <footer id="footer" className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {config.logoText.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm" data-editable={`section${index + 1}Title`}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.editableId}
                        data-original-href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={`social${index + 1}Href`}
                    data-original-href={social.href}
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.editableId}
                data-original-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
