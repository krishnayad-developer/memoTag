import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Rocket,
  Zap,
  LayoutDashboard,
  Users,
  MessageSquare,
  Mail,
  CheckCircle,
  AlertTriangle,
  Loader2,
} from 'lucide-react';
import { cn } from '../lib/util';

// Dummy Data (Replace with actual data)
const features = [
  {
    title: 'Intuitive Interface',
    description: 'MemoTag offers a clean and user-friendly interface for effortless organization.',
    icon: Rocket,
  },
  {
    title: 'Powerful Tagging',
    description: 'Organize your notes with a flexible and robust tagging system.',
    icon: Zap,
  },
  {
    title: 'Cross-Platform Access',
    description: 'Access your notes anytime, anywhere, on any device.',
    icon: LayoutDashboard,
  },
  {
    title: 'Collaboration',
    description: 'Share your notes and collaborate with others in real-time.',
    icon: Users,
  },
];

const testimonials = [
  {
    name: 'Alice Smith',
    quote: 'MemoTag has transformed the way I organize my thoughts. It\'s incredibly intuitive and efficient!',
    avatar: 'https://source.unsplash.com/random/50x50/?woman,1',
  },
  {
    name: 'Bob Johnson',
    quote: 'The tagging feature is a game-changer. I can easily find any note in seconds.',
    avatar: 'https://source.unsplash.com/random/50x50/?man,1',
  },
  {
    name: 'Charlie Brown',
    quote: 'I love the cross-platform access. I can use it on my phone, tablet, and computer.',
    avatar: 'https://source.unsplash.com/random/50x50/?boy,1',
  },
];

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const slideInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const FeatureCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideInVariants}
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="mb-4 text-blue-400">
        <feature.icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  );
};

const TestimonialCard = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-4"
        />
        <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
      </div>
      <p className="text-gray-300 italic">“{testimonial.quote}”</p>
    </motion.div>
  );
};

const MemoTagWebsite = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (event) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormMessage('');

    // Basic validation
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setFormStatus('error');
      setFormMessage('Please fill in all fields.');
      return;
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setFormStatus('error');
      setFormMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Simulate an API call (replace with your actual backend logic)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
      // In a real app, you'd use fetch or axios to send data to your server
      // Example (using a placeholder API endpoint):
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(contactForm),
      // });
      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }

      setFormStatus('success');
      setFormMessage('Thank you for your message! We\'ll get back to you soon.');
      setContactForm({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      setFormStatus('error');
      setFormMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            MemoTag
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your all-in-one solution for organizing thoughts, ideas, and everything in between.
          </p>
        </div>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Effortlessly Organize Your Thoughts
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Capture, tag, and connect your ideas with MemoTag. Boost your productivity and creativity.
              </p>
              <button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started Free
              </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                className="w-full max-w-3xl mx-auto"
            >
                {/* Placeholder for a more visually appealing image or video  */}
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10">
                    <div className="animate-pulse text-gray-400 text-center">
                        [Image or Video Placeholder]
                    </div>
                </div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">How It Works</h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
                <div className="text-2xl font-semibold text-blue-400">1.</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Capture Your Ideas</h3>
                  <p className="text-gray-300">
                    Quickly capture your thoughts using text, voice, or images.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
                <div className="text-2xl font-semibold text-blue-400">2.</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Organize with Tags</h3>
                  <p className="text-gray-300">
                    Categorize your notes with custom tags for easy retrieval.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
                <div className="text-2xl font-semibold text-blue-400">3.</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Connect and Discover</h3>
                  <p className="text-gray-300">
                    Link related notes and discover new connections between your ideas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">
              What Our Users Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Contact Us</h2>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="mt-1 bg-black/20 text-white border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-1 bg-black/20 text-white border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Message"
                    className="mt-1 bg-black/20 text-white border-gray-700"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={cn(
                    'w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 py-3 rounded-full shadow-lg transition-all duration-300',
                    formStatus === 'submitting' && 'opacity-70 cursor-not-allowed',
                    formStatus === 'success' &&
                      'bg-green-500 hover:bg-green-600 from-green-500 to-green-500 hover:from-green-600 hover:to-green-600',
                    formStatus === 'error' &&
                      'bg-red-500 hover:bg-red-600 from-red-500 to-red-500 hover:from-red-600 hover:to-red-600',
                  )}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Sent!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {formMessage && (
                  <div
                    className={cn(
                      'text-sm text-center',
                      formStatus === 'error' && 'text-red-400',
                      formStatus === 'success' && 'text-green-400',
                    )}
                  >
                    {formStatus === 'error' && <AlertTriangle className="inline-block mr-1 w-4 h-4" />}
                    {formStatus === 'success' && <CheckCircle className="inline-block mr-1 w-4 h-4" />}
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          © {new Date().getFullYear()} MemoTag. All rights reserved.
          <div className="mt-2 flex justify-center gap-4">
            {/* Add Social Media Icons Here */}
            <a href="#" className="hover:text-blue-400 transition-colors">
              {/* Replace with actual social icon (e.g., Twitter, LinkedIn) */}
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              {/* Replace with actual social icon (e.g., Facebook, Instagram) */}
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MemoTagWebsite;

