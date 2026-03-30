export function FinderMark({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#finder-fill)" />
      <path d="M32 4H44C53.9411 4 60 10.0589 60 20V44C60 53.9411 53.9411 60 44 60H32V4Z" fill="rgba(255,255,255,0.14)" />
      <path d="M32 4H20C10.0589 4 4 10.0589 4 20V44C4 53.9411 10.0589 60 20 60H32V4Z" fill="rgba(255,255,255,0.08)" />
      <path d="M23 24.5C24.6569 24.5 26 23.1569 26 21.5C26 19.8431 24.6569 18.5 23 18.5C21.3431 18.5 20 19.8431 20 21.5C20 23.1569 21.3431 24.5 23 24.5Z" fill="#0B1220" />
      <path d="M41 24.5C42.6569 24.5 44 23.1569 44 21.5C44 19.8431 42.6569 18.5 41 18.5C39.3431 18.5 38 19.8431 38 21.5C38 23.1569 39.3431 24.5 41 24.5Z" fill="#0B1220" />
      <path d="M21 40C24.3333 34.6667 28 32 32 32C36 32 39.6667 34.6667 43 40" stroke="#08111F" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M32 8V56" stroke="rgba(8,17,31,0.72)" strokeWidth="2.2" />
      <defs>
        <linearGradient id="finder-fill" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#62C4FF" />
          <stop offset="0.58" stopColor="#4C85FF" />
          <stop offset="1" stopColor="#3159C9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AndroidMark({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="56" height="56" rx="20" fill="url(#android-shell)" />
      <path
        d="M20 27C20 20.3726 25.3726 15 32 15C38.6274 15 44 20.3726 44 27V28H20V27Z"
        fill="#E8FFE8"
        fillOpacity="0.18"
      />
      <path
        d="M22 28.5C22 22.701 26.701 18 32.5 18H31.5C37.299 18 42 22.701 42 28.5V39.5C42 42.5376 39.5376 45 36.5 45H27.5C24.4624 45 22 42.5376 22 39.5V28.5Z"
        fill="#D5F6D5"
      />
      <path d="M27 17L23.5 12" stroke="#D5F6D5" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M37 17L40.5 12" stroke="#D5F6D5" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="28" cy="25.5" r="1.7" fill="#32A852" />
      <circle cx="36" cy="25.5" r="1.7" fill="#32A852" />
      <rect x="18" y="29" width="4.5" height="13.5" rx="2.25" fill="#D5F6D5" />
      <rect x="41.5" y="29" width="4.5" height="13.5" rx="2.25" fill="#D5F6D5" />
      <rect x="26" y="43.5" width="5" height="10" rx="2.5" fill="#D5F6D5" />
      <rect x="33" y="43.5" width="5" height="10" rx="2.5" fill="#D5F6D5" />
      <defs>
        <linearGradient id="android-shell" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#57D379" />
          <stop offset="0.65" stopColor="#2AA84A" />
          <stop offset="1" stopColor="#167C33" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DesktopAppTile({ children, active = false, tone = "sky" }) {
  const tones = {
    sky: "from-[#84D7FF] via-[#5CA8FF] to-[#345CDA]",
    violet: "from-[#B8B4FF] via-[#857AFF] to-[#5747D9]",
    green: "from-[#8FF0C1] via-[#3DDA86] to-[#16814C]",
    amber: "from-[#FFD88A] via-[#FFB34C] to-[#E07A13]",
    rose: "from-[#FFB1CB] via-[#F06DA0] to-[#BC3D79]",
    slate: "from-[#DCE4F4] via-[#9EAACA] to-[#5B6786]",
  };

  return (
    <div
      className={`grid h-12 w-12 place-items-center rounded-[15px] bg-gradient-to-b ${tones[tone]} text-white shadow-[0_14px_22px_rgba(0,0,0,0.28)] ring-1 ring-white/20 transition ${
        active ? "scale-[1.03]" : ""
      }`}
    >
      <div className="grid h-11 w-11 place-items-center rounded-[13px] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]">
        {children}
      </div>
    </div>
  );
}

export function MobileAppBubble({ children, active = false, tone = "teal" }) {
  const tones = {
    teal: active
      ? "bg-[linear-gradient(180deg,#78E7DF,#2BB6B3)] text-[#031414]"
      : "bg-white/[0.05] text-white/[0.74]",
    blue: active
      ? "bg-[linear-gradient(180deg,#8DB1FF,#5B7FFF)] text-[#07112E]"
      : "bg-white/[0.05] text-white/[0.74]",
  };

  return (
    <div
      className={`grid h-10 w-10 place-items-center rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.22)] transition ${tones[tone]}`}
    >
      {children}
    </div>
  );
}
