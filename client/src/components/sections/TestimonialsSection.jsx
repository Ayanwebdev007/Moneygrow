import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        location: 'Mumbai',
        text: 'Money Grow helped me understand systematic investing. Their transparent approach and regular updates give me confidence in my investment journey.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        location: 'Delhi',
        text: 'The SIP calculator was eye-opening. I started small and have been consistently investing for 2 years now. Great support team!',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150',
    },
    {
        id: 3,
        name: 'Amit Patel',
        location: 'Ahmedabad',
        text: 'Professional service with a personal touch. The team explains everything clearly and there are no hidden terms.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="section-padding bg-emerald-50/80 border-y border-emerald-500/10 dark:bg-emerald-950/10">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our Investors Say
                    </h2>
                    <p className="text-muted-foreground">
                        Hear from real people who have started their investment journey with Money Grow.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="group h-full">
                            <div className="h-full relative p-8 rounded-3xl bg-card border border-border/50 hover:border-emerald-500/20 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-8 text-emerald-700 dark:text-emerald-500 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21H5.0166Z"></path></svg>
                                </div>

                                {/* Testimonial Text */}
                                <div className="relative z-10 mb-8 flex-1">
                                    <div className="mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-amber-400 text-lg">★</span>
                                        ))}
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                                    <div className="relative">
                                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-emerald-100 dark:border-emerald-800 shadow-md">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-card rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <p className="text-center text-xs text-muted-foreground mt-8">
                    These testimonials reflect individual experiences. Investment results may vary.
                </p>
            </div>
        </section>
    );
}
