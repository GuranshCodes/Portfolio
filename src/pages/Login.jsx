import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { LogIn } from "lucide-react";

export default function Login() {
  return (
    <AuthLayout
      icon={LogIn}
      title="Sign-in is disabled"
      subtitle="This portfolio is served as a static site"
      footer={
        <Link to="/" className="text-primary font-medium hover:underline">
          Return to the homepage
        </Link>
      }
    >
      <p className="text-sm text-muted-foreground text-center">
        Authentication is not enabled for this GitHub Pages deployment.
      </p>
    </AuthLayout>
  );
}
