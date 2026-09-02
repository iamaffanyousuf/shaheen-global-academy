import { useEffect } from "react";

declare global {
  interface Window {
    ShaheenAI?: {
      init: (config?: { chatbotUrl?: string }) => void;
      destroy: () => void;
    };
  }
}

export function ShaheenAIWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://shaheenglobalacademy-ai.onrender.com/shaheenai.js";

    script.async = true;

    script.onload = () => {
      window.ShaheenAI?.init({
        chatbotUrl: "https://shaheenglobalacademy-ai.onrender.com",
      });
    };

    script.onerror = () => {
      console.error("Failed to load Shaheen AI widget.");
    };

    document.body.appendChild(script);

    return () => {
      window.ShaheenAI?.destroy();
      script.remove();
    };
  }, []);

  return null;
}
