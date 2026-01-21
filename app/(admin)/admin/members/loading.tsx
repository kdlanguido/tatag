import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start pt-18 gap-4 bg-background">
      <div className="relative flex items-center justify-center">
        <Image 
          src="/assets/logo.png" 
          alt="Logo" 
          width={120} 
          height={120} 
          className="mb-4 object-contain" 
          priority
        />
      </div>
      <div className="flex items-center flex-col">
        <p className="text-sm font-medium text-muted-foreground">
          Loading Titan Arms Portal
        </p>
        <span className="flex gap-1 items-center pt-1 mt-2">
          <span className="h-3 w-3 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]"></span>
          <span className="h-3 w-3 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.35s]"></span>
          <span className="h-3 w-3 rounded-full bg-muted-foreground animate-bounce"></span>
        </span>
      </div>
    </div>
  );
}