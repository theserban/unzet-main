"use client";

import React from "react";
import Image from "next/image";

const featuredTestimonial = {
  body: "Dedicated to a culture of continuous improvement and teamwork. Connecting businesses with top developers,  transforming ideas into successful realities and ensuring clients excel in the digital landscape.",
  author: {
    name: "Laurentiu Manta",
    handle: "teckstar",
    logoUrl: "photos/teckstar.svg",
  },
};

const testimonials = [
  [
    [
      {
        body: "By empowering the email creation, we coach people to get better at sales, ensuring their messages are clear",
        author: {
          name: "Andrei Istrate",
          handle: "persuwise",
        },
      },
    ],
    [
      {
        body: "Great company culture in services leads to outstanding client experiences and people-focused success",
        author: {
          name: "Carol Mihailescu",
          handle: "inereto",
        },
      },
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative bg-black isolate">
      <section id="testimonials" className="py-16 sm:py-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
              Insights from Top Achievers
            </h2>
            <p className="mt-6 text-xl leading-7 text-white">
              This is how innovators disrupt the market. Instead of sharing
              opinions about us, here are their missions, both past and present,
              which we proudly support and contribute to.
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-sm leading-6 text-white sm:gap-0 sm:gap-y-8 lg:gap-8 sm:mt-20 sm:grid-cols-0 lg:grid-cols-3 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="pb-2 text-left transition-transform duration-500 transform border shadow-lg bg-secondary-400 ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 rounded-tr-ct rounded-bl-ct border-primary-500/20 hover:-translate-y-3">
              <blockquote className="p-6 text-lg font-medium leading-7 tracking-tight text-white sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center px-6 py-4 border-t gap-x-4 gap-y-4 border-gray-900/10 sm:flex-nowrap">
                <div className="flex-auto">
                  <div className="font-semibold text-primary-500">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-white">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <Image
                  className="flex-none w-auto h-8 transition-transform duration-500 transform hover:scale-105"
                  src={featuredTestimonial.author.logoUrl}
                  alt=""
                  width={32}
                  height={32}
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8 text-left"
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="p-6 text-left transition-transform duration-500 transform border shadow-lg ring-1 ring-gray-900/5 rounded-tr-ct rounded-bl-ct bg-secondary-400 border-primary-500/20 hover:-translate-y-3"
                      >
                        <blockquote className="font-semibold text-white">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center mt-6 gap-x-4">
                          <div>
                            <div className="font-semibold text-primary-500">
                              {testimonial.author.name}
                            </div>
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
