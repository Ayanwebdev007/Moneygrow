import React, { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import AppDownloadSection from '../components/sections/AppDownloadSection';
import GrowthPlansSection from '../components/sections/GrowthPlansSection';
import SipTeaserSection from '../components/sections/SipTeaserSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';
import Modal from '../components/ui/Modal';
import SipCalculator from '../components/sections/SipCalculator';

export default function Home() {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <HeroSection />
            <HowItWorksSection />
            <AppDownloadSection />
            <GrowthPlansSection />

            <SipTeaserSection onOpenCalculator={() => setIsCalculatorOpen(true)} />

            <div className="reveal-on-scroll">
                <TestimonialsSection />
            </div>
            <div className="reveal-on-scroll">
                <CtaSection />
            </div>

            <Modal
                isOpen={isCalculatorOpen}
                onClose={() => setIsCalculatorOpen(false)}
                title="SIP Calculator"
            >
                <SipCalculator />
            </Modal>
        </div>
    );
}
