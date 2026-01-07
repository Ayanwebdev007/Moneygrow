import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="bg-foreground text-background text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl mb-2 whitespace-nowrap"
                    >
                        Chat with us on WhatsApp!
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/918630336464"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 animate-pulse-gentle"
                aria-label="Chat on WhatsApp"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {/* Ripple Effect */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></span>

                {/* WhatsApp Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 relative z-10"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.24-.12-1.012-.372-1.928-1.189-.713-.636-1.196-1.422-1.336-1.666-.14-.244-.015-.376.108-.5.11-.11.244-.287.366-.43.12-.144.161-.244.244-.406.083-.162.04-.305-.02-.454-.06-.149-.471-1.137-.646-1.558-.171-.41-.35-.353-.473-.36l-.4-.007c-.139 0-.365.052-.556.26-.191.208-.729.712-.729 1.737 0 1.025.75 2.016.852 2.155.103.14 1.474 2.25 3.57 3.159.499.217.888.347 1.192.443.501.159.957.137 1.317.083.402-.06 1.231-.502 1.405-.987.173-.485.174-.9-.124-1.144-.049-.074-.18-.119-.47-.268zM12 2C6.477 2 2 6.477 2 12c0 1.841.498 3.565 1.365 5.051L2.05 21.95l5.051-1.315C8.565 21.503 10.159 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.637 0-3.176-.434-4.512-1.191l-.324-.183-2.99.778.792-2.903-.2-.319C4.058 14.942 3.5 13.523 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
                </svg>
            </a>
        </div>
    );
}
