"use client"

import { useState } from "react"
import Image from "next/image"

export function ProfileImage() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="w-[300px] h-[300px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side - Primary profile image */}
        <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-background shadow-lg">
          <Image
            src="/images/cameron.jpg"
            alt="Your profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Back side - Secondary image (flipped) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-full overflow-hidden border-4 border-background shadow-lg">
          <Image
            src="/images/colors.jpg"
            alt="Secondary image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Global styles for 3D transforms */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

