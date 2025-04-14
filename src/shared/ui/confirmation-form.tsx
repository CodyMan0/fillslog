import { Button } from "@/shared/ui/button";

export const ConfirmationForm = ({
  onClose,
  handler,
}: {
  onClose: VoidFunction;
  handler: VoidFunction;
}) => {
  const deleteUserClick = (isCancel: boolean) => {
    onClose();

    if (isCancel) {
      return;
    }
    handler();
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h1>Are you sure you want to delete this?</h1>
      <div className="flex w-3/4 items-center justify-center gap-4">
        <Button
          className="flex-1"
          variant="destructive"
          onClick={() => deleteUserClick(false)}
        >
          Yes
        </Button>
        <Button
          className="flex-1"
          variant="secondary"
          onClick={() => deleteUserClick(true)}
        >
          no
        </Button>
      </div>
    </div>
  );
};
