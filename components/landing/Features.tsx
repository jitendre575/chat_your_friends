'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Globe, Smartphone, Trophy } from 'lucide-react';

export default function Features() {
    const features = [
        {
            title: 'Ultra Fast',
            description: 'Experience sub-100ms latency on all our games and chat platforms.',
            icon: Zap,
        },
        {
            title: 'Secure & Private',
            description: 'End-to-end encryption for all your private conversations and data.',
            icon: Shield,
        },
        {
            title: 'Global Scale',
            description: 'Connect with users from over 150 countries instantly.',
            icon: Globe,
        },
        {
            title: 'Community First',
            description: 'Built by the community, for the community with regular polls.',
            icon: Users,
        },
        {
            title: 'Mobile Optimized',
            description: 'A seamless experience whether you are on iOS, Android, or Web.',
            icon: Smartphone,
        },
        {
            title: 'Daily Rewards',
            description: 'Log in every day to collect coins and exclusive digital assets.',
            icon: Trophy,
        },
    ];

    return (
        <section id="features" className="py-24 bg-background/50 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
                        >
                            Why Choose Us
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
                        >
                            The Next Level of <br /> <span className="text-primary">Engagement</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-sm max-w-sm mb-2"
                    >
                        We've built a platform that combines the adrenaline of gaming with the warmth of social connection.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex gap-6"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                <feature.icon size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-black text-white uppercase italic tracking-tight group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
