import { useEffect, useState } from "react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

const LiteYouTube = ({ videoId, title, className = "" }: LiteYouTubeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load the web component only on the client side
    if (!customElements.get("lite-youtube")) {
      import("@justinribeiro/lite-youtube").then(() => {
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, []);

  // Return a placeholder during SSR and while loading with YouTube thumbnail
  if (typeof window === "undefined" || !isLoaded) {
    return (
      <div
        className={className}
        style={{
          aspectRatio: "16 / 9",
          backgroundColor: "#000",
          position: "relative",
          backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* YouTube play button */}
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "68px",
            height: "48px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderRadius: "14px",
            border: "none",
            cursor: "pointer"
          }}
          aria-label={title}
        >
          <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
            <path
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#f00"
            />
            <path d="M 45,24 27,14 27,34" fill="#fff" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <lite-youtube
      videoid={videoId}
      playlabel={title}
      class={className}
      style={{
        aspectRatio: "16 / 9"
      }}
    />
  );
};

export default LiteYouTube;
