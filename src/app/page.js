import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
   <div className="bg-[url('/res1.jpg')] bg-cover bg-center w-full h-[100px] sm:h-[500px] font-sans grid grid-rows-[auto_1fr_auto] p-8 pb-20 gap-16 sm:p-20 space-y-12">
  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-zinc-800 text-center">
      <strong>Resume</strong>
      <br /> <strong>Finder</strong>
    </h1>
    <p className="text-center text-lg sm:text-2xl text-zinc-800 mt-4 max-w-3xl">
      Our platform uses Machine Learning to analyze and recommend the best resumes based on your job profile and preferences.
    </p>
  </main>
</div>


      <section className="mt-20 px-4 sm:px-8 flex justify-center">
        <Carousel className="bg-slate-300 max-w-xl rounded-lg shadow-lg p-4 sm:p-8 w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image
                  src="/res2.jpg"
                  alt="Resume Example 1"
                  width={320}
                  height={200}
                  className="rounded-lg shadow-lg max-w-md h-auto"
                  loading="lazy"
                />
                <p className="mt-4 text-xl text-center text-gray-800">
                  AI analyzes your resume's strengths and weaknesses, <br /> providing a clear overview of improvements.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image
                  src="/res3.jpg"
                  alt="Resume Example 2"
                  width={320}
                  height={200}
                  className="rounded-lg shadow-lg max-w-md h-auto"
                  loading="lazy"
                />
                <p className="mt-4 text-xl text-center text-gray-800">
                  Get personalized recommendations to <br /> enhance your resume's impact and visibility.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image
                  src="/res4.jpg"
                  alt="Resume Example 3"
                  width={320}
                  height={200}
                  className="rounded-lg shadow-lg max-w-md h-auto"
                  loading="lazy"
                />
                <p className="mt-4 text-xl text-center text-gray-800">
                  Receive tailored suggestions to make <br /> your resume stand out in the job market.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-80" />
          <CarouselNext className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-80" />
        </Carousel>
      </section>

      <section className="mt-20 flex justify-start items-center px-4 sm:px-8">
        <div className="flex flex-col items-start">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-zinc-800 mb-4 text-right">
            So Start <br /> the journey
          </h1>
          <Button className="text-white px-6 py-3 rounded-lg shadow-md">
            Begin
          </Button>
        </div>
      </section>

      <section className="bg-gray-800 p-8 sm:p-16 mt-20 rounded-lg shadow-lg max-w mx-auto">
        {/* Additional Content Here */}
      </section>
      
      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                PitchWriterAI
              </h3>
              <p className="text-gray-600 max-w-xs">
                Helping entrepreneurs and startups create winning pitches using
                AI.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition duration-150"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 ResumeAvailablity. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition duration-150"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition duration-150"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition duration-150"
              >
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
