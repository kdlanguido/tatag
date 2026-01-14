import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background">
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
      
      <div className="flex items-center gap-1">
        <p className="text-sm font-medium text-muted-foreground">
          Loading Titan Arms Portal
        </p>
        <span className="flex gap-1 items-center pt-1">
          <span className="h-1 w-1 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]"></span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]"></span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground animate-bounce"></span>
        </span>
      </div>
    </div>
  );
}