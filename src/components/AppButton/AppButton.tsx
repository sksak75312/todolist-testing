import { Button as ButtonUi } from "@/components/ui/button";

export default function Button({ onButton }: { onButton: () => void }) {
  return (
    <ButtonUi type="button" className="rounded-s-none" onClick={onButton}>
      Add Todo
    </ButtonUi>
  );
}
