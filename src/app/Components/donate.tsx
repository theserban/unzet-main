import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
}

const Card = ({ imageUrl, title, date, description }: CardProps) => (
  <div className="py-3 px-5 pb-16 text-white transition-transform duration-500 border shadow-lg bg-secondary-400 rounded-tr-ct rounded-bl-ct border-primary-500/20 hover:-translate-y-3">
    <div className="flex items-center justify-center w-32 h-12 pt-2 mb-2">
      <Image src={imageUrl} alt={title} width={248} height={52} />
    </div>
    <p className="mb-3 font-semibold text-primary-500">{date}</p>
    <p>{description}</p>
  </div>
);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Work() {
  return (
    <section className="bg-black" id="donate">
      <div className="gap-16 items-center py-8 px-8 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:pb-16 lg:pt-0 lg:px-8">
        <div className="text-gray-400 sm:text-lg">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
            Your Startup Remains
          </h2>
          <p className="mt-6 text-xl leading-7 text-white">
            If you want your startup name to rise again like a phoenix, provide
            your name details or domain. We will pass it on to ambitious
            founders who share the same drive you had when your idea was alive.
          </p>
          <div className="flex items-center mt-8 gap-x-6">
            <button className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105">
              <Link href="mailto:we@unzet.com?subject=My%20Startup%20Remains&body=Name%3A%0A%0ACurrent%20Company%3A%0A%0AI%20want%20to%20donate%3A%0A%0ASomething%20cool%3A">
                Send Us The Details <span aria-hidden="true">→</span>
              </Link>
            </button>
            <button
              onClick={() => scrollToSection("compete")}
              className="text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105"
            >
              Compete <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="mt-0">
            <Card
              imageUrl="photos/zunego.svg"
              title="Social Surge"
              date="05.2023 - 09.2023"
              description="Your all-in-one operating system for daas businesses"
            />
          </div>
          <div className="mt-8">
            <Card
              imageUrl="photos/takameru.svg"
              title="Social Surge"
              date="04.2022 - 03.2023"
              description="The design agency with a focus on growth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
