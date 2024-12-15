import { Play } from "lucide-react";
import { Laptop, Wifi, ChromeIcon as Browser } from "lucide-react";
import {
  Video,
  Mic,
  Volume2,
  FileCheck,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Testimonials from "../Components/Testimonials";
import FaqSection from "../Components/Faq";
import Footer from "../Components/Footer";
import VerificationCards from "../Components/VerificationCard";

export default function App() {
  return (
    <div className="min-h-screen">
      <div 
  className="bg-[#7C3AED] pt-16 pb-[200px] px-8 md:px-16 rounded-xl mx-4 md:mx-8 mt-4 relative overflow-hidden"
  style={{
    background: `
      #7C3AED,
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    backgroundPosition: 'top',
    backgroundAttachment: 'fixed',
    zIndex: 0
  }}
>
  <div className="max-w-[1200px] mx-auto relative z-10">
    {/* Header */}
    <div className="max-w-[600px] mx-auto mb-12">
      <div className="bg-white rounded-lg py-2 px-4 flex justify-between items-center shadow-sm border">
        <div className="flex items-center gap-2">
          <img
            src="src\assets\profile-v1.png"
            alt="OpenIntervue Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="font-semibold">OpenIntervue</span>
        </div>
        <button className="bg-[#8B5CF6] text-white rounded-lg px-4 py-1 text-sm border">
          Help
        </button>
      </div>
    </div>

    {/* Version Badge */}
    <div className="flex justify-center mb-8">
      <div className="bg-white px-4 py-1 rounded-full text-base font-medium flex items-center gap-2">
        <div className="w-4 h-4 bg-[#8B5CF6] rounded-full"></div>
        Pihu v13
      </div>
    </div>

    {/* Main Content */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Welcome to Your Interview Journey
        <br />
        with OpenIntervue
      </h1>
      <p className="text-white/80">
        Let's make sure you have everything you need before we schedule
        your interview
      </p>
    </div>
  </div>

  {/* Add the fading grid effect */}
  <div
    className="absolute top-0 left-0 w-full h-full"
    style={{
      background: `
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
      backgroundPosition: 'top',
      opacity: 0.3, // adjust opacity to make grid light
      zIndex: -1
    }}
  />
</div>

      {/* Video Player */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 -mt-[150px] flex justify-center">
        <div
          className="w-full max-w-4xl aspect-[16/9] relative"
          style={{
            perspective: "1000px",
          }}
        >
          <div className="absolute inset-0 bg-white rounded-lg ">
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-b from-[#ffffff] to-[#d2cdda] rounded-full flex items-center justify-center">
                <button className="w-16 h-16 bg-[#8B5CF6] rounded-full flex shadow-lg items-center justify-center hover:bg-[#7C3AED]">
                  <Play className="w-6 h-6 text-white" fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*set up section */}
      <div className="w-full max-w-6xl mx-auto p-6 px-24">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-white bg-purple-600 p-2 rounded-lg font-medium mb-2 inline-block">
            <span className="text-white">✨</span> Setup Interview
          </div>
          <h1 className="text-[#1a365d] text-3xl font-bold mb-3">
            Ace Your Interview With The Right Setup
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Ensure Your Setup Meets All Interview Requirements for Success
          </p>
        </div>
        <div className="min-h-screen p-6">
          <VerificationCards />
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="text-white bg-purple-600 p-2 rounded-lg font-medium mb-2 inline-block">
          <span className="text-white">✨</span> Setup Requirement
        </div>
        <h2 className="text-[#1a365d] text-2xl font-bold mb-2">
          Your Interview Right Setup
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unk
        </p>
      </div>

      {/* Requirements Cards */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Laptop", "Internet", "Browser"].map((item, index) => (
            <div
              key={item}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center space-x-4"
            >
              <div className="bg-purple-100/50 w-10 h-10 rounded-lg flex items-center justify-center">
                {index === 0 && <Laptop className="w-5 h-5 text-purple-600" />}
                {index === 1 && <Wifi className="w-5 h-5 text-purple-600" />}
                {index === 2 && <Browser className="w-5 h-5 text-purple-600" />}
              </div>
              <div>
                <h3 className="font-semibold text-[#1a365d] text-sm">{item}</h3>
                <p className="text-gray-500 text-xs">
                  Streamline task monitoring for productivity.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
      <FaqSection />
      <Footer />
    </div>
  );
}
