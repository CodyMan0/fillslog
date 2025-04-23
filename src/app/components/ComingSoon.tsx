import { AlertCircle } from "lucide-react";
import FeedbackButton from "../my/components/FeedbackButton";
import { Button } from "@/shared/ui";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center text-muted-foreground">
      <AlertCircle className="w-10 h-10 mb-2 text-accent" />
      <h2 className="text-xl font-semibold">준비 중입니다</h2>
      <p className="text-sm mt-1">해당 기능은 곧 오픈될 예정이에요!</p>
      <FeedbackButton>
        <Button
          variant="outline"
          className="w-full max-w-xs mx-auto mt-4 bg-white text-black text-sm font-semibold py-3 rounded-full shadow-md hover:scale-[1.02] transition-transform"
        >
          있으면 좋을 것 같은 기능을 알려주세요!
        </Button>
      </FeedbackButton>
    </div>
  );
}
