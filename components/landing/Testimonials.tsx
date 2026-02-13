'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Alex Rivers',
            role: 'Pro Gamer',
            content: 'The low latency and clean interface make this my go-to platform for quick social gaming. Highly recommended!',
            avatar: 'AR',
            rating: 5
        },
        {
            name: 'Sarah Chen',
            role: 'Tech Enthusiast',
            content: 'Finally a place where I can find people nearby without the usual clutter of social media. Very refreshing.',
            avatar: 'SC',
            rating: 5
        },
        {
            name: 'Marcus Miller',
            role: 'Community Lead',
            content: 'The diamond club perks are actually worth it. The early access games are always polished and fun.',
            avatar: 'MM',
            rating: 4
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-96 bg-primary/5 blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
                    >
                        Community Feedback
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
                    >
                        Trusted by <span className="text-primary">Thousands</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-primary/30 transition-colors group"
                        >
                            <div className="space-y-6">
                                <div className="flex gap-1 text-primary">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <div className="relative">
                                    <Quote className="absolute -top-4 -left-4 text-primary/10 w-12 h-12" />
                                    <p className="text-muted-foreground italic relative z-10 leading-relaxed">
                                        "{t.content}"
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xs shadow-lg">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-black uppercase tracking-tight italic">{t.name}</h4>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
