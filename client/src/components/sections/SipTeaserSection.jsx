import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SipTeaserSection({ onOpenCalculator }) {
    return (
        <section className="section-padding relative overflow-hidden reveal-on-scroll">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-900/20 dark:to-background -z-20"></div>
            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>

            <div className="container-custom">
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-amber-300 dark:border-amber-900/50 bg-white/40 dark:bg-card/40 backdrop-blur-xl shadow-2xl group">
                    {/* Decorative backgrounds */}
                    <div className="absolute inset-0 mesh-gradient-gold opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

                    <div className="relative z-10 p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-12 text-center md:text-left">
                        <div className="flex-1 w-full order-2 md:order-1">
                            <span className="inline-block px-4 py-1.5 bg-amber-500/20 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300 text-[10px] md:text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/20 dark:border-amber-800 backdrop-blur-sm">
                                Smart Planning
                            </span>
                            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-950 dark:text-white mb-6 leading-tight">
                                Predict Your <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-900 dark:from-amber-400 dark:to-amber-200 drop-shadow-sm leading-[1.1]">Financial Future</span>
                            </h2>
                            <p className="text-base md:text-xl text-emerald-900/80 dark:text-emerald-100/80 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-bold">
                                Curious about how much your money can grow? Our intelligent SIP calculator helps you visualize your path to wealth in seconds.
                            </p>

                            <button
                                onClick={onOpenCalculator}
                                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="8" x2="16" y1="8" y2="8" /><line x1="8" x2="16" y1="12" y2="12" /><line x1="8" x2="16" y1="16" y2="16" /></svg>
                                    Try Calculator Now
                                </span>
                            </button>
                        </div>

                        <div className="flex-1 w-full order-1 md:order-2 perspective-1000">
                            {/* Attractive Visual Element */}
                            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border-4 border-white dark:border-card shadow-2xl shadow-emerald-900/10 transform transition-transform duration-500 ease-out group-hover:rotate-1">
                                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Financial Planning" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 to-transparent mix-blend-multiply"></div>

                                {/* Floating Result Badge */}
                                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl animate-float">
                                    <div className="flex items-center gap-3 md:gap-5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        </div>
                                        <div className="text-left leading-tight">
                                            <p className="text-[9px] md:text-xs text-amber-100 uppercase font-bold tracking-widest mb-0.5">Projected Value</p>
                                            <p className="text-xl md:text-2xl font-bold text-white tracking-tight">₹52,40,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
