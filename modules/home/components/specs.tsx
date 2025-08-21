"use client";

import { features } from "@/core/commons/contants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // type CarouselApi,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
// import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Specs() {
  return (
    <div className='py-16 lg:mt-24 px-6 w-full max-w-[1400px] flex justify-center' id="features">
      <div className='container space-y-12'>
        <div className='grid lg:grid-cols-2'>
          <div className='space-y-2'>
            <h1 className="text-[2rem] lg:text-[3rem] xl:text-[3rem] leading-tight font-bold">Amidarh for <span>All</span></h1>
            <p className='opacity-70'>
            At Amidarh, we make education engaging, accessible, and personalized. Using cutting-edge technology and innovative strategies, we create a dynamic learning environment for students, educators, and institutions. Discover how we're transforming education
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            AutoPlay({
              playOnInit: true,
              stopOnInteraction: false,
              delay: 3000,
            }),
          ]}
          className='w-full'
        >
          <CarouselContent>
            {features.map(({ icon, ...feature }, index) => (
              <CarouselItem
                key={index}
                className='basis-[95%] md:basis-1/2 lg:basis-[33%] border-gray-200 2xl:basis-1/4 h-full'
              >
                <Card className='shadow-[hsla(207,51%,46%,0.04)] backdrop-blur-2xl bg-white/50 lg:aspect-[1.3/1] h-full border-gray-200'>
                  <CardContent className='pt-6 space-y-5 h-full'>
                    {/* <Image
                      src={icon}
                      alt=''
                      width={100}
                      height={100}
                      className='size-10 text-black'
                    /> */}
                    <div className='space-y-1'>
                      <h5 className='text-2xl'>{feature.title}</h5>
                      <p className='lg:text-sm'>{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
