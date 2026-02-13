'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Games', href: '/games' },
        { name: 'Community', href: '/user-connect' },
        { name: 'Chat', href: '/nearby-chat' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="text-primary-foreground" size={24} />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                        Chat<span className="text-primary">Friends</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/user-connect"
                        className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/user-connect"
                                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground text-center font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Join Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
