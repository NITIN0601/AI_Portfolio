import { Button } from '@/components/ui/button';

export default function Homescreen() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <h1 className="text-2xl font-bold">Home Screen</h1>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
        Click Me
      </Button>
    </div>
  );
}