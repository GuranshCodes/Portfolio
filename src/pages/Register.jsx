import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { UserPlus } from "lucide-react";

export default function Register() {
  return (
    <AuthLayout
      icon={UserPlus}
      title="Registration is disabled"
      subtitle="This portfolio is a static GitHub Pages site"
      footer={
        <Link to="/" className="text-primary font-medium hover:underline">
          Return to the homepage
        </Link>
      }
    >
      <p className="text-sm text-muted-foreground text-center">
        Account creation is not available in this deployment.
      </p>
    </AuthLayout>
  );
}
