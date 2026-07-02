import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Lock, AlertTriangle } from "lucide-react";

export default function ResetPassword() {
  return (
    <AuthLayout
      icon={AlertTriangle}
      title="Password reset is unavailable"
      subtitle="This static site does not support password resets"
      footer={
        <Link to="/" className="text-primary font-medium hover:underline">
          Return to home
        </Link>
      }
    >
      <p className="text-sm text-foreground text-center">
        Password reset links are not available in this GitHub Pages deployment.
      </p>
    </AuthLayout>
  );
}
