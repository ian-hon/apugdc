import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const adminCode: string[] = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "a", "b",
  "Enter"
];

export default function AdminCodeDetector() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const router = useRouter(); // Initialize Next.js router

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setInputSequence((prev) => {
        const newSequence = [...prev, event.key].slice(-adminCode.length);

        if (newSequence.join(",") === adminCode.join(",")) {
          router.push(`/admin?secret=${Date.now()}`); // Navigate to /secret page
          return [];
        }
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="p-4">
      {/* <p>Enter the secret sequence!</p>
      <p className="text-gray-500">Current input: {inputSequence.join(" → ")}</p> */}
    </div>
  );
}