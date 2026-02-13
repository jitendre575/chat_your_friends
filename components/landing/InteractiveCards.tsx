'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, MapPin, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InteractiveCards() {
    const router = useRouter();

    const cards = [
        {
            title: 'Spot Games',
            description: 'Compete in fast-paced mini games and climb the global leaderboards.',
            icon: Gamepad2,
            color: 'from-blue-500 to-cyan-400',
            href: '/games',
            delay: 0.1
        },
        {
            title: 'Nearby Chat',
            description: 'Discover people within your reach and start meaningful local conversations.',
            icon: MapPin,
            color: 'from-purple-500 to-pink-500',
            href: '/nearby-chat',
            delay: 0.2
        },
        {
            title: 'User Connect',
            description: 'Match with like-minded individuals globally and grow your circle.',
            icon: MessageSquare,
            color: 'from-orange-500 to-yellow-500',
            href: '/user-connect',
            delay: 0.3
        },
        {
            title: 'Diamond Club',
            description: 'Unlock premium features, exclusive skins, and early access to new games.',
            icon: Sparkles,
            color: 'from-green-500 to-emerald-400',
            href: '/user-connect', // Or premium page
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
                    >
                        Choose Your <span className="text-primary italic">Adventure</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-xs"
                    >
                        Tailored experiences for every type of social interaction
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: card.delay }}
                            whileHover={{ y: -10 }}
                            onClick={() => router.push(card.href)}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl">
                                {/* Gradient Background Glow */}
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${card.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />

                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} text-white mb-6 shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                    <card.icon size={32} strokeWidth={2.5} />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                    Launch Platform
                                    <ArrowRight size={14} />
                                </div>

                                {/* Progress-like line at bottom */}
                                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.color} w-0 group-hover:w-full transition-all duration-700 ease-out`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
