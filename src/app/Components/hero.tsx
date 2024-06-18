"use client";

import React from 'react';
import { ShoppingCartIcon, CloudIcon, BookOpenIcon, UserIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface CardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    power: string;
    description: string;
}

const Card = ({ icon: Icon, title, power, description }: CardProps) => (
    <div className="bg-secondary-400 text-white p-6 rounded-tr-ct rounded-bl-ct border border-primary-500/20 shadow-lg transition-transform duration-500 hover:-translate-y-3">
        <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4">
            <Icon className="h-12 w-12 text-primary-500" />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-primary-500 font-semibold mb-4">{power}</p>
        <p>{description}</p>
    </div>
);

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function Hero() {
    return (
        <section className="bg-black" id="hero">
            <div className="relative isolate">
                <div className="overflow-hidden">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-primary-500/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
                    </svg>
                    <div className="mx-auto max-w-7xl px-6 pb-12 pt-28 sm:pt-60 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                    Build the Right Deck to{" "}
                                    <span className="text-primary-500">Become the Ace<span className="pl-1 relative text-dot-sm lg:text-dot top-dot">&#x25A0;</span></span>
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                                    Our mission is to transform tech startups and initiatives into strong brands by delivering all the essential elements needed to develop an outstanding product quickly and efficiently.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                                    >
                                        Ace Level Clients
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('how')}
                                        className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105"
                                    >
                                        How It Works <span aria-hidden="true">→</span>
                                    </button>
                                </div>
                            </div>
                            <div className="relative mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 w-full sm:w-auto">
                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <Card 
                                            icon={ShoppingCartIcon}
                                            title="Market Fit"
                                            power="Power +20"
                                            description="You've aligned your product with the demand"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <Card 
                                            icon={CloudIcon}
                                            title="Cloud Chaser"
                                            power="Power +18"
                                            description="Your website is indexed and ready to rumble"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <Card 
                                            icon={BookOpenIcon}
                                            title="Brand Bound"
                                            power="Power +14"
                                            description="You are now the proud owner of a great brand"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <Card 
                                            icon={UserIcon}
                                            title="King User"
                                            power="Power +10"
                                            description="You got the first user to sign in for the product"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <Card 
                                            icon={ArrowUpIcon}
                                            title="Social Surge"
                                            power="Power +8"
                                            description="You are trendy on all platforms, keep it up"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-primary-black py-24 sm:py-18">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <h2 className="text-lg font-semibold leading-8 text-primary-500 text-center">Growth Hacked</h2>
                            <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-4">
                                <Image
                                    className="col-span-2 max-h-8 w-full object-contain object-center lg:col-span-1 transform transition-transform duration-500 hover:scale-105"
                                    src="/photos/persuwise.svg"
                                    alt="Persuwise"
                                    width={158}
                                    height={48}
                                />
                                <Image
                                    className="col-span-2 max-h-8 w-full object-contain object-center lg:col-span-1 transform transition-transform duration-500 hover:scale-105"
                                    src="/photos/antvise.svg"
                                    alt="Antvise"
                                    width={158}
                                    height={48}
                                />
                                <Image
                                    className="col-span-2 max-h-6 w-full object-contain object-center lg:col-span-1 transform transition-transform duration-500 hover:scale-105 mt-2"
                                    src="/photos/shiftintech.svg"
                                    alt="Shiftintech"
                                    width={158}
                                    height={48}
                                />
                                <Image
                                    className="col-span-2 max-h-8 mt-1 w-full object-contain object-center lg:col-span-1 transform transition-transform duration-500 hover:scale-105"
                                    src="/photos/nextup.svg"
                                    alt="NextUp"
                                    width={158}
                                    height={48}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
