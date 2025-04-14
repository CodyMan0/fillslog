import { PropsWithChildren } from 'react';

import { Dialog, DialogContent, DialogHeader } from '@/shared/ui/dialog';

const Modal = ({
  open,
  onToggle,
  children,
}: PropsWithChildren & {
  open: boolean;
  onToggle: VoidFunction;
}) => {
  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onToggle}>
      <DialogContent>
        <DialogHeader>{children}</DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
