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

  // Return a placeholder during SSR and while loading
  if (typeof window === "undefined" || !isLoaded) {
    return (
      <div
        className={className}
        style={{
          aspectRatio: "16/9",
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span style={{ color: "#fff" }}>Loading video...</span>
      </div>
    );
  }

  return (
    <lite-youtube
      videoid={videoId}
      playlabel={title}
      className={className}
    />
  );
};

export default LiteYouTube;
