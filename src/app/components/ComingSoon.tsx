import { AlertCircle } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center text-muted-foreground">
      <AlertCircle className="w-10 h-10 mb-2 text-accent" />
      <h2 className="text-xl font-semibold">준비 중입니다</h2>
      <p className="text-sm mt-1">해당 기능은 곧 오픈될 예정이에요!</p>
    </div>
  );
}
