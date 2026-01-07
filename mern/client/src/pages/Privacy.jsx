import React from 'react';

export default function Privacy() {
    return (
        <section className="py-16 bg-background">
            <div className="container-custom max-w-3xl">
                <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">Information We Collect</h2>
                    <p>We collect information you provide directly, such as name, email, phone number, and KYC documents.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">How We Use Your Information</h2>
                    <p>We use your information to provide services, process transactions, and communicate with you about your investments.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">Data Security</h2>
                    <p>We implement industry-standard security measures to protect your personal information.</p>
                </div>
            </div>
        </section>
    );
}
