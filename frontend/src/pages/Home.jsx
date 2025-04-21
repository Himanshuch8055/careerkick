import React from "react";
import HeroSection from "../components/home/HeroSection";
import USPsSection from "../components/home/USPsSection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import TrendingProducts from "../components/home/TrendingProducts";
import HowItWorks from "../components/home/HowItWorks";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import NewsletterSignup from "../components/home/NewsletterSignup";

const trendingProducts = [
  {
    name: "Classic White Tee",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    category: "Fashion"
  },
  {
    name: "Wireless Headphones",
    price: "₹2499",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    category: "Electronics"
  },
  {
    name: "Modern Sofa",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Home"
  },
];

const testimonials = [
  {
    name: "Priya S.",
    text: "Amazing selection, fast shipping, and great support. My go-to online shop!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Rahul M.",
    text: "Checkout was super easy and my order arrived early. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Ayesha K.",
    text: "Love the variety and deals. Will shop again!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
];

const Home = () => (
  <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-10 w-full">
    <HeroSection />
    <USPsSection />
    <FeaturedCategories />
    <TrendingProducts products={trendingProducts} />
    <HowItWorks />
    <TestimonialsCarousel testimonials={testimonials} />
    <NewsletterSignup />
  </div>
);

export default Home;
