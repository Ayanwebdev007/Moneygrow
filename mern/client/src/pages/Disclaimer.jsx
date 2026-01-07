import React from 'react';

export default function Disclaimer() {
    return (
        <section className="py-16 bg-background">
            <div className="container-custom max-w-3xl">
                <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p className="text-lg font-medium text-foreground">Important Notice</p>
                    <p>Investments in digital farming and gold are subject to market risks. Please read all documents carefully before investing.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">No Guarantee of Returns</h2>
                    <p>Money Grow does not guarantee any specific returns. All projections and estimates are for illustrative purposes only and should not be considered as assured returns.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">Market Risks</h2>
                    <p>Agricultural investments may be affected by weather conditions, market prices, and other external factors. Gold prices fluctuate based on global market conditions.</p>

                    <h2 className="font-serif text-xl font-semibold text-foreground">Financial Advice</h2>
                    <p>The information on this website is not financial advice. Please consult a qualified financial advisor before making investment decisions.</p>
                </div>
            </div>
        </section>
    );
}
