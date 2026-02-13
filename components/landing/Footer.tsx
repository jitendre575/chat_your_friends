'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Twitter, Instagram, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="text-primary-foreground" size={24} />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                                Chat<span className="text-primary">Friends</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                            The ultimate social gaming platform designed for the modern era. Connect with friends, play games, and discover a whole new way to interact.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                                <button
                                    key={i}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase italic tracking-tight">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Features', 'Games', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest text-[11px]">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase italic tracking-tight">Legals</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest text-[11px]">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.4em] opacity-40">
                        © {currentYear} ChatFriends Platform. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.4em] opacity-40">Privacy</span>
                        <span className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.4em] opacity-40">Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
