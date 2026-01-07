import React from 'react';

export default function Terms() {
    return (
        <section className="py-16 bg-background">
            <div className="container-custom max-w-3xl">
                <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>By using Money Grow services, you agree to these terms. Please read them carefully.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">1. Investment Risks</h2>
                    <p>All investments carry risks. Past performance is not indicative of future results. You may lose some or all of your investment.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">2. No Guaranteed Returns</h2>
                    <p>We do not guarantee any specific returns on investments. Projections are indicative only.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">3. User Responsibilities</h2>
                    <p>You are responsible for maintaining the confidentiality of your account and for all activities under your account.</p>
                </div>
            </div>
        </section>
    );
}
