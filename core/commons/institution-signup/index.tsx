"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, CircleX, Copy, Loader2 } from "lucide-react";
import {
  SLUG_UNAVAILABLE_MESSAGES,
  useRegisterInstitution,
  useSlugAvailability,
} from "@/modules/trupper/services";
import { useStore } from "@/lib/utils/zustand/store";
import { toast } from "sonner";

export function InstitutionSignup() {
  const [name, setName] = useState("");
  const [adminFirstName, setAdminFirstName] = useState("");
  const [adminLastName, setAdminLastName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [temporaryPassword, setTemporaryPassword] = useState<string | null>(
    null,
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { setInstitutionSignup } = useStore();
  const institutionSignup = useStore((state) => state.institutionSignup);
  const { registerInstitution, isLoading } = useRegisterInstitution();
  const {
    slug,
    status: slugStatus,
    reason: slugReason,
  } = useSlugAvailability(name);

  const resetForm = () => {
    setName("");
    setAdminFirstName("");
    setAdminLastName("");
    setAdminEmail("");
    setTemporaryPassword(null);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await registerInstitution({
      name,
      slug,
      adminFirstName,
      adminLastName,
      adminEmail,
    });

    if (response) {
      setIsSubmitted(true);
      if (!response.emailSent) {
        setTemporaryPassword(response.temporaryPassword);
      }
    }
  };

  const copyPassword = async () => {
    if (!temporaryPassword) return;
    await navigator.clipboard.writeText(temporaryPassword);
    toast.success("Password copied to clipboard");
  };

  return (
    <Dialog
      open={institutionSignup}
      onOpenChange={(open) => {
        setInstitutionSignup(open);
        if (!open) resetForm();
      }}
    >
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10">
            <DialogHeader className="text-center pb-6 pt-8 px-8">
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Sign up your institution
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-base">
                Create your Trupper account and get your admin set up in
                minutes
              </DialogDescription>
            </DialogHeader>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="px-8 pb-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      Institution Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Bright Academy"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      minLength={4}
                      maxLength={200}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug" className="mb-2 block">
                      Institution Slug
                    </Label>
                    <div className="relative">
                      <Input
                        id="slug"
                        type="text"
                        value={slug}
                        placeholder="bright-academy"
                        readOnly
                        disabled
                        className="w-full pr-9 text-muted-foreground"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2">
                        {slugStatus === "checking" && (
                          <Loader2 className="size-4 animate-spin text-muted-foreground" />
                        )}
                        {slugStatus === "available" && (
                          <CheckCircle className="size-4 text-green-500" />
                        )}
                        {slugStatus === "unavailable" && (
                          <CircleX className="size-4 text-red-500" />
                        )}
                      </span>
                    </div>
                    <p
                      className={cn(
                        "mt-1.5 text-xs",
                        slugStatus === "unavailable"
                          ? "text-red-600"
                          : slugStatus === "available"
                            ? "text-green-600"
                            : "text-muted-foreground",
                      )}
                    >
                      {slugStatus === "unavailable" && slugReason
                        ? SLUG_UNAVAILABLE_MESSAGES[slugReason]
                        : slugStatus === "available"
                          ? "This institution name is available"
                          : "Generated automatically from your institution name."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="adminFirstName" className="mb-2 block">
                        Admin First Name
                      </Label>
                      <Input
                        id="adminFirstName"
                        type="text"
                        placeholder="Ada"
                        value={adminFirstName}
                        onChange={(e) => setAdminFirstName(e.target.value)}
                        required
                        maxLength={100}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="adminLastName" className="mb-2 block">
                        Admin Last Name
                      </Label>
                      <Input
                        id="adminLastName"
                        type="text"
                        placeholder="Obi"
                        value={adminLastName}
                        onChange={(e) => setAdminLastName(e.target.value)}
                        required
                        maxLength={100}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="adminEmail" className="mb-2 block">
                      Admin Email
                    </Label>
                    <Input
                      id="adminEmail"
                      type="email"
                      placeholder="ada@brightacademy.com"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={
                      isLoading ||
                      slugStatus === "checking" ||
                      slugStatus === "unavailable"
                    }
                    className="w-full"
                    size="lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Creating account...
                      </div>
                    ) : (
                      "Sign Up Institution"
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="px-8 pb-8 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  You&rsquo;re all set!
                </h3>
                <p className="text-gray-600 mb-4">
                  Check {adminEmail || "your inbox"} for your login details to
                  get started with Trupper.
                </p>

                {temporaryPassword && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left">
                    <p className="text-sm text-amber-800 mb-2">
                      We couldn&apos;t confirm the email was delivered&mdash;here&apos;s
                      your temporary password, just in case:
                    </p>
                    <div className="flex items-center justify-between gap-2 rounded-lg bg-white border border-amber-200 px-3 py-2">
                      <code className="text-sm font-mono text-gray-900">
                        {temporaryPassword}
                      </code>
                      <button
                        type="button"
                        onClick={copyPassword}
                        className="text-amber-700 hover:text-amber-900"
                        aria-label="Copy password"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="bg-gray-50 px-8 py-4 border-t">
              <div className="flex items-center justify-center text-sm text-gray-500">
                <span>🔒 Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const InstitutionSignupButton = ({
  size = "lg",
  className,
}: {
  size?: "sm" | "lg" | "xl";
  className?: string;
}) => {
  const { setInstitutionSignup } = useStore();
  return (
    <Button
      variant="trupper"
      size={size === "sm" ? "sm" : size === "xl" ? "xl" : "lg"}
      className={cn(className)}
      onClick={() => setInstitutionSignup(true)}
    >
      Get Started with Trupper
    </Button>
  );
};
