"use client";

import React from 'react';
import Image from 'next/image';

const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Laurentiu Manta',
    handle: 'teckstar',
    imageUrl: '/photos/founder.png',
    logoUrl: 'photos/teckstar.svg',
  },
};

const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Andrei Istrate',
          handle: 'persuwise',
          imageUrl: '/photos/founder.png',
        },
      },
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Carol Mihailescu',
          handle: 'inereto',
          imageUrl: '/photos/founder.png',
        },
      },
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-black">
      <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
          Insights from Top Achievers
          </h2>
          <p className="mt-6 leading-7 text-white text-xl">
          We love seeing how innovators disrupt the market. Instead of sharing opinions about us, here are their missions, both past and present, which we proudly support and contribute to.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-white sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="bg-secondary-400 pb-2 shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 rounded-tr-ct rounded-bl-ct text-left border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3">
            <blockquote className="p-6 text-lg font-medium leading-7 tracking-tight text-white sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <div className="flex-auto">
                <div className="font-semibold text-primary-500">{featuredTestimonial.author.name}</div>
                <div className="text-white">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <Image
                className="h-8 w-auto flex-none transform transition-transform duration-500 hover:scale-105"
                src={featuredTestimonial.author.logoUrl}
                alt=""
                width={32}
                height={32}
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                    (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8 text-left'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="p-6 shadow-lg ring-1 ring-gray-900/5 rounded-tr-ct rounded-bl-ct bg-secondary-400 text-left border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3"
                    >
                      <blockquote className="text-white font-semibold">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold text-primary-500">{testimonial.author.name}</div>
                          <div className="text-white">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}
