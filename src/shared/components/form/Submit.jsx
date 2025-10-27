import { Button } from "../Button";

function Submit({ children }) {
  return (
    <Button type="submit" classes="mt-6">
      {children}
    </Button>
  );
}

export { Submit };
