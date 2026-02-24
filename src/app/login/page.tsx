import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Login = () => {
  return (
    <Card className="h-130 w-100">
      <CardHeader>
        <CardTitle className="w-full flex justify-center">
          Sign in to test
        </CardTitle>
        <CardDescription className="w-full flex justify-center">
          Welcome back! Please sign in to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full">Continue with Google</Button>
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-2"></div>
      </CardContent>
    </Card>
  );
};
