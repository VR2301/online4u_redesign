import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Home,
  Database,
  DollarSign,
  LayoutTemplate,
  LogIn,
  UserPlus,
  Menu,
  X,
  Globe2,
  Wallet,
  BarChart,
  CheckCircle,
  CreditCard,
  MessageCircle,
  Rocket,
  LineChart,
  Package as PackageIcon,
  Layout,
  Send,
  Zap,
  Settings,
  Palette,
  MessageCircle as MessageCircleIcon,
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
} from "lucide-react";

// ===========================
// Data & Utilities
// ===========================
const templateCarouselData = [
  {
    title: "Food & Restaurant Template",
    description:
      "A vibrant, mouth-watering layout optimized for food photography and quick online ordering. Perfect for cafes, restaurants, and bakeries.",
    alt: "Food Template",
    color: "3B3461",
    img: "/images/img1.png",
  },
  {
    title: "Electronics & Gadgets",
    description:
      "A clean, technical design with focus on product specifications and clear pricing. Ideal for electronics, tech gadgets, and spare parts.",
    alt: "Electronics Template",
    color: "00B775",
    img: "/images/img2.png",
  },
  {
    title: "Health & Wellness Pharmacy",
    description:
      "A trustworthy, organized, and blue-themed template for medical supplies, supplements, and pharmacies. Focuses on clarity and trust.",
    alt: "Medicine Template",
    color: "3B82F6",
    img: "/images/img3.png",
  },
  {
    title: "Fashion & Boutique Stores",
    description:
      "An elegant and visual layout designed to showcase apparel and accessories with large, impactful imagery and minimalist navigation.",
    alt: "Fashion Template",
    color: "FA1E95",
    img: "/images/img4.png",
  },
  {
    title: "Grocery & Daily Needs",
    description:
      "A high-contrast, category-focused template allowing customers to quickly browse and add daily essentials to their cart efficiently.",
    alt: "Grocery Template",
    color: "F97316",
    img: "/images/img5.png",
  },
];

const plans = [
  {
    name: "Welcome Plan",
    monthlyPrice: "999",
    yearlyPrice: "4999",
    isHighlighted: false,
    tag: "WELCOME",
    features: {
      products: "30 Products",
      store: true,
      categories: "5 Categories",
      customDomain: false,
      management: true,
      orderSystem: true,
      otp: false,
      razorpay: false,
    },
  },
  {
    name: "Starter Plan",
    monthlyPrice: "1999",
    yearlyPrice: "7999",
    isHighlighted: false,
    tag: "STARTER",
    features: {
      products: "75 Products",
      store: true,
      categories: "10 Categories",
      customDomain: false,
      management: true,
      orderSystem: true,
      otp: false,
      razorpay: false,
    },
  },
  {
    name: "Business Plan",
    monthlyPrice: "3999",
    yearlyPrice: "14999",
    isHighlighted: true,
    tag: "BUSINESS",
    features: {
      products: "150 Products",
      store: true,
      categories: "15 Categories",
      customDomain: true,
      management: true,
      orderSystem: true,
      otp: true,
      razorpay: true,
    },
  },
  {
    name: "Premium Plan",
    monthlyPrice: "4999",
    yearlyPrice: "24999",
    isHighlighted: false,
    tag: "PREMIUM",
    features: {
      products: "300 Products",
      store: true,
      categories: "25 Categories",
      customDomain: true,
      management: true,
      orderSystem: true,
      otp: true,
      razorpay: true,
    },
  },
];

const featureRows = [
  { key: "section_store", title: "Store Setup", isHeader: true },
  { key: "store", title: "1 Online Store" },
  { key: "domain", title: "Domain" },
  { key: "section_prod", title: "Product Management", isHeader: true },
  { key: "products", title: "Products" },
  { key: "categories", title: "Categories" },
  { key: "management", title: "Full Product Management" },
  { key: "section_ecom", title: "E-commerce & Payments", isHeader: true },
  { key: "order_system", title: "Order System" },
  { key: "otp", title: "Secure Delivery with OTP" },
  { key: "razorpay", title: "Razorpay Payment Gateway" },
];

const hexToRgbaString = (hex, alpha) => {
  if (!hex || hex.length !== 6) return `rgba(255,255,255,${alpha})`;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const finalAlpha = document.documentElement.classList.contains("dark") ? alpha * 1.5 : alpha;
  return `rgba(${r}, ${g}, ${b}, ${finalAlpha.toFixed(2)})`;
};

// ===========================
// Small helper icons
// ===========================
const CheckIcon = () => (
  <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const CrossIcon = () => (
  <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ===========================
// BillingToggle (Pill style)
// ===========================
const BillingToggle = ({ isYearly, onToggle }) => {
  const commonButtonClass = "py-2 px-5 rounded-full transition-all duration-300 ease-in-out font-medium text-sm";
  const activeButtonClass = "bg-white text-purple-600 shadow-md";
  const inactiveButtonClass = "bg-transparent text-gray-600 dark:text-gray-300";

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Pick Your Billing:</span>
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 space-x-1">
        <button onClick={() => onToggle(false)} className={`${commonButtonClass} ${!isYearly ? activeButtonClass : inactiveButtonClass}`}>
          Monthly Billing
        </button>
        <button onClick={() => onToggle(true)} className={`${commonButtonClass} ${isYearly ? activeButtonClass : inactiveButtonClass}`}>
          Yearly Billing (Save 20%)
        </button>
      </div>
    </div>
  );
};

// ===========================
// PricingCards
// ===========================
const PricingCards = ({ plans, isYearly }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {plans.map((plan) => {
        const displayPrice = isYearly ? parseInt(plan.yearlyPrice).toLocaleString("en-IN") : parseInt(plan.monthlyPrice).toLocaleString("en-IN");
        const displayCycle = isYearly ? "/ YEAR" : "/ MONTH";

        const cardClasses = `rounded-lg p-6 text-center transition-all duration-300 ${
          plan.isHighlighted ? "border-2 border-purple-500 shadow-2xl transform scale-105 bg-white dark:bg-gray-900" : "border border-gray-200 bg-white dark:bg-gray-800"
        }`;

        const buttonClasses = `mt-6 block w-full py-3 px-4 rounded-lg font-medium text-center transition-all text-sm ${
          plan.isHighlighted ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`;

        return (
          <div key={plan.name} className={`${cardClasses} opacity-0 transform scale-98 animate-fade-in`} style={{ animationDelay: "0.06s", animationFillMode: "forwards" }}>
            <h3 className="text-sm font-medium text-purple-600 uppercase tracking-wide">{plan.name}</h3>
            <div className="mt-4 text-gray-900 dark:text-white">
              <span className="text-4xl font-bold">₹{displayPrice}</span>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400"> {displayCycle}</span>
            </div>
            <a href="#" className={buttonClasses}>
              Get Started
            </a>
          </div>
        );
      })}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(8px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fadeInUp 420ms cubic-bezier(.2,.9,.3,1) forwards;
        }
      `}</style>
    </div>
  );
};

// ===========================
// PricingTable
// ===========================
const PricingTable = ({ plans }) => {
  const getFeatureCell = (plan, featureKey) => {
    const { features } = plan;
    switch (featureKey) {
      case "store":
        return features.store ? <CheckIcon /> : <CrossIcon />;
      case "domain":
        return <span className="text-sm">{features.customDomain ? "Custom Domain" : "Sub Domain"}</span>;
      case "products":
        return <span className="text-sm">{features.products}</span>;
      case "categories":
        return <span className="text-sm">{features.categories}</span>;
      case "management":
        return features.management ? <CheckIcon /> : <CrossIcon />;
      case "order_system":
        if (plan.name.includes("Welcome") || plan.name.includes("Starter")) return <span className="text-sm">Email/WhatsApp Enquiry</span>;
        return <span className="text-sm">Seamless Order Process</span>;
      case "otp":
        return features.otp ? <CheckIcon /> : <CrossIcon />;
      case "razorpay":
        return features.razorpay ? <CheckIcon /> : <CrossIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <table className="w-full">
        <thead className="bg-white dark:bg-gray-900">
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="sticky left-0 bg-white dark:bg-gray-900 z-10 px-6 py-4 text-left text-sm font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              Feature Details
            </th>
            {plans.map((plan) => (
              <th key={plan.name} className={`px-6 py-4 text-center text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide ${plan.isHighlighted ? "bg-purple-50 dark:bg-purple-900/20" : ""}`}>
                {plan.tag}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {featureRows.map((row) => {
            if (row.isHeader) {
              return (
                <tr key={row.key} className="bg-gray-50 dark:bg-gray-900/40">
                  <th colSpan={plans.length + 1} className="sticky left-0 bg-gray-50 dark:bg-gray-900/40 z-10 px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {row.title}
                  </th>
                </tr>
              );
            }
            return (
              <tr key={row.key} className="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{row.title}</td>
                {plans.map((plan) => (
                  <td key={plan.name} className={`px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-300 ${plan.isHighlighted ? "bg-purple-50 dark:bg-purple-900/20" : "bg-white dark:bg-gray-900"}`}>
                    {getFeatureCell(plan, row.key)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// ===========================
// Polished Pricing Section (self-contained + subtle animation)
// ===========================
function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="pricing" className="py-28 md:py-32 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className={`max-w-7xl mx-auto space-y-12 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transition: "opacity 420ms ease, transform 420ms ease" }}>
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Choose the <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Perfect Plan</span></h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Pick monthly or yearly billing, compare features, and get started in minutes.</p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center">
          <BillingToggle isYearly={isYearly} onToggle={setIsYearly} />
        </div>

        {/* Pricing cards */}
        <div className="mb-6">
          <PricingCards plans={plans} isYearly={isYearly} />
        </div>

        {/* Feature table */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">Detailed Feature Comparison</h3>
          <PricingTable plans={plans} />
        </div>
      </div>
    </section>
  );
}

// ===========================
// Remaining sections
// Header, HeroSection, FeaturesSection, TemplatesSection, HowItWorksStep, Footer, ScrollToTopButton
// Kept mostly unchanged from your original, with Footer updated below.
// ===========================

function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navItems = [
    { name: "Home", icon: Home, href: "#home", id: "home" },
    { name: "Features", icon: Database, href: "#why-choose-us", id: "why-choose-us" },
    { name: "Templates", icon: LayoutTemplate, href: "#templates", id: "templates" },
    { name: "Pricing", icon: DollarSign, href: "#pricing", id: "pricing" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] header-bg">
      <nav className="w-full max-w-7xl mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="transition-all duration-300 hover:opacity-80">
            <img src="/images/logo.png" alt="Online4U Logo" className="h-10 w-auto" onError={(e) => (e.target.src = "https://placehold.co/150x40/4c1d95/ffffff?text=LOGO")} />
          </a>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center space-x-2 text-gray-700 dark:text-gray-300 transition-all duration-200 font-medium group nav-link py-2 px-3 rounded-full ${
                    isActive ? "scale-110" : "hover:scale-105 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <item.icon className={`w-4 h-4 transition-colors ${isActive ? "text-purple-600 dark:text-purple-400" : "text-purple-500 dark:text-purple-400"}`} />
                  <span className={isActive ? "text-purple-600 dark:text-purple-400" : "text-gray-700 dark:text-gray-300"}>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 dark:text-white bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md shadow-cyan-500/30">
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen((s) => !s)} className="text-gray-800 dark:text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 p-3 rounded-lg transition-colors text-gray-800 dark:text-white ${isActive ? "bg-purple-100 dark:bg-purple-900/50" : "hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                >
                  <item.icon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            <div className="flex flex-col space-y-3 pt-4 border-t border-black/10 dark:border-white/10">
              <button className="flex items-center justify-center space-x-2 px-5 py-3 rounded-lg text-gray-700 dark:text-white bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-5 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md">
                <UserPlus className="w-5 h-5" />
                <span>Register</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="pt-40 pb-24 px-6 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white dark:from-gray-900 dark:via-[#020024] dark:to-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 order-last lg:order-first">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-gray-900 dark:text-white relative">
            <span className="relative z-10">Your E-com Store</span>
            <span className="relative z-10 block mt-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">All in One Platform</span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg mb-8">
            Sell your products online in a single click, accept payments, manage products, and receive direct WhatsApp orders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="group relative flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/30 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              <span className="relative z-10">Get Started</span>
            </button>

            <button className="flex items-center justify-center space-x-2 px-8 py-3 rounded-lg text-gray-700 dark:text-white bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/20 transition-all shadow-sm">
              <span>Explore Features</span>
            </button>
          </div>

          <p className="text-center sm:text-left text-lg text-gray-700 dark:text-gray-300 mt-8">
            Trusted by <strong className="font-bold text-purple-600 dark:text-purple-400">05+</strong> small businesses worldwide
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center order-first lg:order-last">
          <div className="absolute top-4 right-4 w-auto z-20 bg-red-600 rounded-full flex flex-col items-center justify-center text-center text-white leading-tight px-5 py-3 animate-pill-glow shadow-lg">
            <span className="font-bold text-lg">50% OFF</span>
            <span className="text-xs">on first year</span>
          </div>

          <DotLottieReact
            src="https://lottie.host/54f46000-0ac5-441e-b9f3-105a6768b071/HJmUpSTYIO.lottie"
            loop
            autoplay
            className="w-full h-full max-w-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const allFeatures = [
    { id: "builder", title: "Easy Builder", description: "Set up your eCommerce store in minutes with drag-and-drop builder.", icon: Palette, iconColor: "text-purple-600" },
    { id: "domain", title: "Custom Domain", description: "Make your brand identity shine with a professional domain.", icon: Globe2, iconColor: "text-blue-600" },
    { id: "manage", title: "Manage Products", description: "Add products with images, descriptions, prices, and variants.", icon: PackageIcon, iconColor: "text-green-600" },
    { id: "advanced", title: "Advanced", description: "Feature-rich eCommerce with SEO and app integrations.", icon: Zap, iconColor: "text-red-600" },
    { id: "launch", title: "Launch Fast", description: "Build and launch your store effortlessly.", icon: Rocket, iconColor: "text-purple-600" },
    { id: "dashboard", title: "Sales Dashboard", description: "Track products, orders, and performance with real-time insights.", icon: LineChart, iconColor: "text-blue-600" },
    { id: "payments", title: "Flexible Payments", description: "Accept UPI, cards, wallets, or COD securely.", icon: CreditCardIcon, iconColor: "text-green-600" },
    { id: "whatsapp", title: "WhatsApp Orders", description: "Let customers order directly through WhatsApp.", icon: MessageCircleIcon, iconColor: "text-green-500" },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const hoveredFeatureData = allFeatures.find((f) => f.id === hoveredCard);

  const FeatureGridCard = ({ id, title, icon: Icon, iconColor, onMouseEnter, onMouseLeave }) => (
    <div onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave(null)} className="group p-4 flex flex-col items-center justify-center space-y-2 w-full aspect-square glass-card rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl glow-border border border-black/10 dark:border-white/10 feature-card-backlight cursor-pointer hover:scale-105">
      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-900/50 rounded-2xl flex items-center justify-center border border-black/5 dark:border-white/10 transition-all duration-300">
        <div className="group-hover:animate-icon-pulse-loop">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center">{title}</h4>
    </div>
  );

  const AnimatedDashboardMockup = ({ featureData }) => {
    let content;
    if (!featureData || featureData.id === "dashboard") {
      content = (
        <>
          <div className="flex justify-between items-center mb-6 px-4 pt-4">
            <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
            <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
          </div>
          <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4">
            <div className="h-full flex items-end relative">
              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                <polyline fill="none" stroke="#8b5cf6" strokeWidth="2" points="0,40 10,20 20,30 30,10 40,35 50,25 60,40 70,15 80,30 90,5 100,20" />
              </svg>
            </div>
          </div>
          <div className="mt-4 px-4 pb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Smart Sales Dashboard</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Hover over a feature on the right to see details.</p>
          </div>
        </>
      );
    } else {
      switch (featureData.id) {
        case "builder":
          content = (
            <>
              <div className="flex justify-between items-center mb-4 px-4 pt-4">
                <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
              </div>
              <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4 flex gap-2">
                <div className="w-1/4 bg-gray-100 dark:bg-gray-700 rounded-lg p-2 space-y-2">
                  <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="w-3/4 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                  <div className="h-16 w-full bg-purple-200 dark:bg-purple-900 rounded"></div>
                  <div className="h-10 w-full bg-purple-200 dark:bg-purple-900 rounded mt-2"></div>
                </div>
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Easy Builder</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Set up your eCommerce store in just minutes with drag-and-drop builder.</p>
              </div>
            </>
          );
          break;
        case "domain":
          content = (
            <>
              <div className="flex justify-between items-center mb-4 px-4 pt-4">
                <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
              </div>
              <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4 flex flex-col items-center justify-center">
                <Globe2 className="w-20 h-20 text-blue-500 mb-4" />
                <div className="w-full max-w-xs h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center px-4 shadow-inner">
                  <span className="text-gray-400 dark:text-gray-500">https://</span>
                  <span className="text-gray-900 dark:text-white font-medium">your-store.com</span>
                </div>
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Custom Domain</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Make your brand identity shine with a professional custom domain.</p>
              </div>
            </>
          );
          break;
        case "manage":
          content = (
            <>
              <div className="flex justify-between items-center mb-4 px-4 pt-4">
                <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
              </div>
              <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4 space-y-2 overflow-hidden">
                <div className="w-full h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center p-2 gap-2">
                  <div className="w-8 h-8 bg-green-200 dark:bg-green-800 rounded"></div>
                  <div className="h-3 w-1/3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
                <div className="w-full h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center p-2 gap-2">
                  <div className="w-8 h-8 bg-green-200 dark:bg-green-800 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
                <div className="w-full h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center p-2 gap-2">
                  <div className="w-8 h-8 bg-green-200 dark:bg-green-800 rounded"></div>
                  <div className="h-3 w-2/5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Manage Products</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Add as many products as you want, complete with images and variants.</p>
              </div>
            </>
          );
          break;
        case "advanced":
          content = (
            <>
              <div className="flex justify-between items-center mb-4 px-4 pt-4">
                <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
              </div>
              <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4 flex items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg">
                  <Zap className="w-10 h-10 text-red-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">SEO Tools</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg">
                  <Settings className="w-10 h-10 text-red-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Integrations</span>
                </div>
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Advanced</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Feature-rich eCommerce with SEO tools and integrations.</p>
              </div>
            </>
          );
          break;
        case "launch":
          content = (
            <>
              <div className="flex justify-between items-center mb-4 px-4 pt-4">
                <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
              </div>
              <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4 flex flex-col items-center justify-center">
                <Rocket className="w-20 h-20 text-purple-500 mb-4 animate-bounce" />
                <div className="w-full h-2 bg-purple-300/50 dark:bg-purple-800 rounded-full mt-4 overflow-hidden"><div className="h-full bg-purple-500 animate-progress-bar" /></div>
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Launch Fast</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Build and launch your store in minutes.</p>
              </div>
            </>
          );
          break;
        case "payments":
          content = (
            <>
              <div className="flex justify-between items-center mb-4 px-4 pt-4">
                <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
              </div>
              <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4 flex items-center justify-center gap-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg"><CreditCard className="w-10 h-10 text-green-600" /></div>
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg"><WalletIcon className="w-10 h-10 text-green-600" /></div>
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg"><DollarSign className="w-10 h-10 text-green-600" /></div>
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Flexible Payments</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Accept UPI, cards, wallets, or COD securely.</p>
              </div>
            </>
          );
          break;
        case "whatsapp":
          content = (
            <>
              <div className="flex justify-between items-center mb-4 px-4 pt-4">
                <div className="h-4 w-20 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
              </div>
              <div className="h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 mx-4 flex flex-col items-center justify-center">
                <MessageCircleIcon className="w-20 h-20 text-green-500 mb-4" />
                <div className="w-3/4 bg-green-100 dark:bg-green-900/50 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-200">Hi! I'd like to order...</div>
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">WhatsApp Orders</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Let customers order directly through WhatsApp.</p>
              </div>
            </>
          );
          break;
        default:
          content = null;
      }
    }

    return (
      <div className="relative w-full max-w-lg h-96 mx-auto lg:mx-0 rounded-3xl bg-white dark:bg-gray-800 shadow-xl border border-black/10 dark:border-white/10 overflow-hidden animate-crossfade">
        <div className="w-full h-full bg-gray-100 dark:bg-gray-900">{content}</div>
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: "inset 0 0 50px rgba(0,0,0,0.05)" }} />
      </div>
    );
  };

  return (
    <section id="why-choose-us" className="py-24 px-6 relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2 tracking-widest uppercase">Why Choose Us</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white mt-2 whitespace-nowrap">Professional, User-Friendly and <span className="ml-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Affordable</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
          <div className="w-full flex justify-center lg:justify-end">
            <AnimatedDashboardMockup featureData={hoveredFeatureData} />
          </div>

          <div className="w-full max-w-lg grid grid-cols-4 grid-rows-2 gap-4 mx-auto lg:mx-0">
            {allFeatures.map((feature) => (
              <FeatureGridCard key={feature.id} id={feature.id} title={feature.title} icon={feature.icon} iconColor={feature.iconColor} onMouseEnter={setHoveredCard} onMouseLeave={() => setHoveredCard(null)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksStep({ icon, number, title, description }) {
  return (
    <div className="flex flex-col col-span-1 items-center p-6 text-center text-gray-800 dark:text-white">
      <div className="relative mb-6">
        <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg">
          {icon}
        </div>
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 bg-gray-800 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-full border-4 border-gray-50">{number}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 max-w-xs">{description}</p>
    </div>
  );
}

function TemplatesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setActiveIndex((i) => (i + 1) % templateCarouselData.length), 5000);
    return () => clearInterval(interval);
  }, []);
  const currentTemplate = templateCarouselData[activeIndex];
  const bgColorRgba = hexToRgbaString(currentTemplate.color, 0.25);
  const businessFeatures = ["Grocery Store", "Stationery & Shop", "Food Vendors", "Mobile & Accessories", "Clothing & Boutique Shops", "Gift & Toy Shops", "Fruit/Vegetable Vendors", "Electronic Stores"];

  return (
    <section id="templates" className="py-24 px-6 relative bg-black/5 dark:bg-white/5">
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="py-12 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4">How It Works</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Launch your online store in three simple steps</p>
        </header>

        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 items-start">
            <HowItWorksStep icon={<Layout className="w-8 h-8 text-white" />} number="01" title="Choose a Template" description="Select from our collection of professionally designed templates." />
            <div className="hidden md:flex items-center justify-center pt-14">
              <div className="step-connector" style={{ width: "100%", height: 2, background: "linear-gradient(to right, #9333ea, #ec4899)", opacity: 0.3 }} />
            </div>
            <HowItWorksStep icon={<PackageIcon className="w-8 h-8 text-white" />} number="02" title="Add Your Products" description="Upload products, set prices, and organize your inventory with ease." />
            <div className="hidden md:flex items-center justify-center pt-14">
              <div className="step-connector" style={{ width: "100%", height: 2, background: "linear-gradient(to right, #9333ea, #ec4899)", opacity: 0.3 }} />
            </div>
            <HowItWorksStep icon={<Send className="w-8 h-8 text-white" />} number="03" title="Launch & Sell Online" description="Publish your store and start selling to customers." />
          </div>
        </div>

        <div className="w-full pt-12">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold tracking-tighter text-center text-gray-900 dark:text-white">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Premium Designs</span>
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
              <div key={`${currentTemplate.alt}-card`} className="relative p-6 w-[400px] h-[400px] shadow-xl flex flex-col justify-center rounded-2xl animate-template-fade mx-auto" style={{ backgroundColor: bgColorRgba, backdropFilter: "blur(15px) saturate(180%)", WebkitBackdropFilter: "blur(15px) saturate(180%)", boxShadow: "0 0 30px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.25), inset 0 0 25px rgba(255,255,255,0.15)" }}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <h3 className="relative z-10 text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white text-center">{currentTemplate.title}</h3>
                <p className="relative z-10 text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">{currentTemplate.description}</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div key={currentTemplate.alt} className="relative w-full max-w-[350px] mx-auto animate-template-fade p-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <img src={currentTemplate.img} alt={currentTemplate.alt} className="object-contain w-full h-auto rounded-2xl relative z-10" onError={(e) => (e.target.src = `https://placehold.co/600x400/${currentTemplate.color}/white?text=Image+Not+Found`)} />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(circle at 50% 60%, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 70%)", mixBlendMode: "soft-light", filter: "blur(10px)" }} />
                </div>

                <div className="flex space-x-3 mt-6">
                  {templateCarouselData.map((template, index) => (
                    <button key={index} onClick={() => setActiveIndex(index)} className="w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none" style={{ backgroundColor: `#${template.color}`, opacity: activeIndex === index ? 1 : 0.4, transform: activeIndex === index ? "scale(1.3)" : "scale(1)", boxShadow: activeIndex === index ? `0 0 6px #${template.color}` : "none" }} aria-label={`Select ${template.title}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="businesses" className="pt-24">
          <div className="relative z-10 grid w-full max-w-6xl mx-auto grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex items-center justify-center p-8 md:p-12">
              <div className="w-full">
                <DotLottieReact src="https://lottie.host/3bde8eba-1452-4937-ac27-25426bbb9ff9/Af5OnUkfw0.lottie" loop autoplay style={{ transform: "scale(1.6)" }} />
              </div>
            </div>

            <div className="relative rounded-2xl border border-black/10 dark:border-white/20 bg-white/20 dark:bg-white/10 p-8 shadow-2xl backdrop-blur-lg md:p-12 glow-border">
              <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2 tracking-widest uppercase">Perfect for Sellers</p>
              <h1 className="my-3 text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">Built for All Types of <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Businesses</span></h1>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">The easiest way to bring your business online. Ready to launch your store in seconds?</p>
              <ul className="mb-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {businessFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-300" />
                    <span className="text-gray-800 dark:text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-6 text-center font-semibold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">Get started for free</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ theme, onToggleTheme }) {
  // derive label from theme so initial label is "Dark" when theme === "light"
  const label = theme === "dark" ? "Light" : "Dark";

  return (
    <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/images/logo.png" alt="logo" className="h-10" onError={(e) => (e.target.src = "https://placehold.co/150x40/4c1d95/ffffff?text=LOGO")} />
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-sm">All-in-one eCommerce platform to start, run and grow your online business.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="#home">Home</a></li>
            <li><a href="#why-choose-us">Features</a></li>
            <li><a href="#templates">Templates</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Actions</h4>
          <div className="flex space-x-3">
            <button onClick={onToggleTheme} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-medium transition-colors">
              {label}
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-10">© {new Date().getFullYear()} Online4U. All rights reserved.</div>
    </footer>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-purple-600 text-white shadow-lg">
      ↑
    </button>
  );
}

// ===========================
// App (main) — export default
// ===========================
export default function App() {
  const [theme, setTheme] = useState("light"); // start light so button initially shows "Dark"
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; }
        .glass-card { background: rgba(255,255,255,0.4); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); border: 1px solid rgba(0,0,0,0.05); }
        .dark .glass-card { background: rgba(31,41,55,0.7); border: 1px solid rgba(255,255,255,0.1); }
        .header-bg { background: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.8)); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-bottom: 1px solid rgba(0,0,0,0.1); }
        .dark .header-bg { background: linear-gradient(to bottom, rgba(17,24,39,0.95), rgba(17,24,39,0.8)); border-bottom: 1px solid rgba(255,255,255,0.1); }
        .glow-border { box-shadow: 0 0 20px rgba(80,200,255,0.1), 0 0 10px rgba(160,100,255,0.1); transition: box-shadow .3s, transform .3s; }
        .feature-card-backlight:hover { box-shadow: 0 0 0 4px rgba(147,51,234,0.3), 0 0 40px rgba(147,51,234,0.4); }
        @keyframes icon-pulse-scale { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        .animate-icon-pulse-loop { animation: icon-pulse-scale 2s infinite ease-in-out; }
        @keyframes templateFade { 0% { opacity: 0; transform: scale(0.98); } 100% { opacity: 1; transform: scale(1); } }
        .animate-template-fade { animation: templateFade 1s ease-in-out forwards; }
        @keyframes crossfade { 0% { opacity: 0; transform: scale(0.98); } 100% { opacity: 1; transform: scale(1); } }
        .animate-crossfade { animation: crossfade 0.5s ease-in-out forwards; }
        @keyframes pill-glow { 0%,100% { transform: scale(1); box-shadow: 0 0 25px rgba(239,68,68,0.6); } 50% { transform: scale(1.03); box-shadow: 0 0 40px rgba(239,68,68,0.9); } }
        .animate-pill-glow { animation: pill-glow 2.5s infinite ease-in-out; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="min-h-screen w-full bg-gray-50 dark:bg-[#020024] text-gray-800 dark:text-gray-200 relative transition-colors duration-300 overflow-x-hidden">
        <Header theme={theme} setTheme={setTheme} />
        <main className="relative z-10">
          <HeroSection />
          <FeaturesSection />
          <TemplatesSection />
          <PricingSection />
          <Footer theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
        </main>
        <ScrollToTopButton />
      </div>
    </>
  );
}
