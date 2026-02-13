'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Zap, Heart } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            title: 'Increased Engagement',
            description: 'Our gamified social features keep users coming back for more, leading to higher retention rates.',
            icon: TrendingUp,
            delay: 0.1
        },
        {
            title: 'Seamless Experience',
            description: 'Zero-friction onboarding means users can start chatting and playing in seconds, not minutes.',
            icon: Zap,
            delay: 0.2
        },
        {
            title: 'Trust & Safety',
            description: 'Advanced moderation and privacy controls ensure a safe environment for everyone.',
            icon: CheckCircle2,
            delay: 0.3
        },
        {
            title: 'Real Connections',
            description: 'Move beyond likes and follows to genuine social interactions through shared gaming experiences.',
            icon: Heart,
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 bg-background/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
                        >
                            Our Benefits
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
                        >
                            Building the Future of <span className="text-primary">Digital Socializing</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground text-lg leading-relaxed max-w-xl"
                        >
                            We don't just build features; we build experiences that matter. Our platform is designed to foster meaningful human connection in a digital-first world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-transparent border border-white/10 backdrop-blur-md"
                        >
                            <div className="text-white font-black italic text-xl uppercase tracking-tight mb-2">Ready to join?</div>
                            <p className="text-muted-foreground text-sm mb-6">Thousands are already experiencing the future.</p>
                            <button className="px-8 py-3 rounded-full bg-primary text-white font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
                                Sign Up Today
                            </button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
                        {benefits.map((benefit) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: benefit.delay }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <benefit.icon size={24} />
                                </div>
                                <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
