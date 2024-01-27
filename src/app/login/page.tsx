import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 w-96 max-w-[100vw] shadow-lg max-sm:shadow-none max-sm:rounded-none rounded-md flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-3 items-center justify-center">
        <h1 className="text-xl">Welcome back!</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to access your blogs
        </p>
      </div>

      {/*  Form */}
      <div className="flex flex-col gap-y-6">
        <div className="relative">
          <Input
            className="rounded-lg ring-2 ring-transparent transition-all focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-blue-700"
            placeholder="Username"
          />
        </div>
        <div className="relative">
          <Input
            className="rounded-lg ring-2 ring-transparent transition-all focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-blue-700"
            placeholder="Password"
          />
          <Eye className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 p-1 hover:bg-gray-50 rounded-full transition-all cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id="persistentLogin" />{" "}
          <Label htmlFor="persistentLogin" className="text-sm cursor-pointer">
            Keep me signed in
          </Label>
        </div>
        <Button className="bg-blue-700 hover:bg-blue-800">Sign In</Button>
      </div>
    </div>
  );
}
