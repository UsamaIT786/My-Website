"use client";

import { useEffect } from "react";

export default function VapiScript() {
  useEffect(() => {
    const VAPI_API_KEY = "d802bd13-fe35-4a9f-ab1a-7fcf2c458225";
    const VAPI_ASSISTANT_ID = "55fa97ec-cdba-4592-8206-fe6eb6896b09";

    const buttonConfig = {
      position: "bottom-right",
      offset: "40px",
      width: "50px",
      height: "50px",
      idle: {
        color: "#00adb5",
        type: "round",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
      },
      active: {
        color: "#ff4444",
        type: "round",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg",
      },
      loading: {
        color: "#00adb5",
        type: "round",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg",
      },
    };

    // Avoid injecting the script more than once
    if (document.getElementById("vapi-script")) return;

    const script = document.createElement("script");
    script.id = "vapi-script";
    script.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;

    script.onload = () => {
      if ((window as any).vapiSDK) {
        (window as any).vapiInstance = (window as any).vapiSDK.run({
          apiKey: VAPI_API_KEY,
          assistant: VAPI_ASSISTANT_ID,
          config: buttonConfig,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existing = document.getElementById("vapi-script");
      if (existing) existing.remove();
    };
  }, []);

  return null;
}
