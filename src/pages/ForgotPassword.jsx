import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <AuthLayout
      icon={Mail}
      title="Password reset is unavailable"
      subtitle="This deployment does not include server-side auth"
      footer={
        <Link to="/" className="text-primary font-medium hover:underline">
          <ArrowLeft className="w-3 h-3 inline mr-1" />Back to home
        </Link>
      }
    >
      <p className="text-sm text-foreground text-center">
        Password reset is not available in this static GitHub Pages build.
      </p>
    </AuthLayout>
  );
}
