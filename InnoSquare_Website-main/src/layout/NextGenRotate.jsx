import { useEffect, useState } from "react";

// Rotating Text Component
const NextGenRotate= () => {
  const texts = [
    "ChatBots",
    "Email Generation",
    "LangChain Development",
    "Vector & Graph RAG models",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            texts[currentTextIndex].slice(0, displayText.length + 1)
          );
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, texts]);

  return (
    <div className="h-12 bg-white flex items-center justify-center overflow-hidden">
      <h3 className="text-3xl font-['Comota'] min-h-[48px] animate-fade-in">
        {displayText}
      </h3>
    </div>
  );
};

export default NextGenRotate;