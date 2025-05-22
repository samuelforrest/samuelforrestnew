
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 font-serif">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! The page you are looking for doesn't exist.</p>
        <Link to="/">
          <Button>Return to Homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
