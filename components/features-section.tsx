import React from 'react';
import { Shield, Zap, Globe, Clock, LucideIcon } from 'lucide-react';

interface FeatureBoxProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureBox = ({ icon: Icon, title, description }: FeatureBoxProps) => {
    return (
        <div className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
            {/* Icon Container */}
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <Icon size={32} />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed px-2">
                {description}
            </p>

            {/* Subtle Bottom Accent */}
            <div className="absolute bottom-6 w-8 h-1 bg-primary/20 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
        </div>
    );
};

export default function FeaturesSection() {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Experience blazing speed with our optimized infrastructure, ensuring your tasks are completed in milliseconds."
        },
        {
            icon: Shield,
            title: "Secure by Design",
            description: "We prioritize your privacy and data security with enterprise-grade encryption and regular security audits."
        },
        {
            icon: Globe,
            title: "Global Connectivity",
            description: "Connect with anyone, anywhere. Our global network ensures low latency and high availability across the world."
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Our dedicated support team is always available to help you resolve issues and optimize your workflow anytime."
        }
    ];

    return (
        <section className="py-24 px-6 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-xs font-black uppercase tracking-[0.3em] bg-primary/5 px-4 py-2 rounded-full ring-1 ring-primary/10">
                        Our Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                        Designed for <span className="text-primary italic">Success</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Everything you need to manage your business efficiently in one powerful platform.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                            <FeatureBox {...feature} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
