'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, Gamepad2 } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] animate-bounce-slow" />

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-4 shadow-xl"
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        The Future of Social Connection
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic"
                    >
                        Connect, Play, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-x">
                            Experience.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Join the ultimate platform where chatting meets gaming. Find friends nearby, compete in epic challenges, and explore a world of instant connections.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link
                            href="/user-connect"
                            className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95"
                        >
                            Get Started Now
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/games"
                            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Explore Games
                            <Gamepad2 size={20} />
                        </Link>
                    </motion.div>

                    {/* Floating Stats/Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
                        {[
                            { label: 'Active Users', value: '50k+', icon: MessageCircle },
                            { label: 'Games Played', value: '1M+', icon: Gamepad2 },
                            { label: 'Connections', value: '200k+', icon: Sparkles },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                                className="space-y-1"
                            >
                                <div className="flex items-center justify-center gap-2 text-primary">
                                    <stat.icon size={18} />
                                    <span className="text-2xl font-black text-white italic tracking-tighter">{stat.value}</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hero Image / Illustration Placeholder Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
