'use client';

import React from 'react';
import FeaturesSection from '@/components/features-section';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DemoFeaturesPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white">
            {/* Demo Header - Just for visibility */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]"
                >
                    <ArrowLeft size={16} /> Back
                </button>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Feature Section Demo
                </div>
                <div className="w-10" /> {/* Spacer */}
            </div>

            {/* The Section */}
            <FeaturesSection />

            {/* Footer Demo */}
            <div className="py-12 px-6 text-center border-t border-slate-100">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
                    Responsive & Minimal Design System
                </p>
            </div>
        </div>
    );
}
