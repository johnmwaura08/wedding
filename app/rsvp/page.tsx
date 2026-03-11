"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function RSVPPage() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<string>("");
  const [plusOne, setPlusOne] = useState<string>("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValid = name.trim().length > 0 && attending !== "" && plusOne !== "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attending: attending === "yes",
          plusOne: plusOne === "yes",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setFormState("success");
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (formState === "success") {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 relative overflow-hidden">
        <div className="text-center max-w-md relative z-10 animate-fade-in-up">
          <CheckCircle2 className="w-12 h-12 text-coral mx-auto mb-6" strokeWidth={1} />
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Thank You
          </h1>
          <div className="decorative-divider max-w-20 mx-auto mb-6">
            <span className="text-gold-muted text-xs">&#10047;</span>
          </div>
          <p className="text-stone-warm text-sm leading-relaxed mb-1">
            Your response has been received, {name}.
          </p>
          {attending === "yes" ? (
            <p className="text-stone-warm text-sm leading-relaxed mb-10">
              We can&apos;t wait to celebrate with you!
            </p>
          ) : (
            <p className="text-stone-warm text-sm leading-relaxed mb-10">
              We&apos;ll miss you! Thank you for letting us know.
            </p>
          )}
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="w-full max-w-[460px] relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <Link
            href="/"
            className="inline-block text-stone-mid text-xs uppercase tracking-[0.3em] hover:text-charcoal transition-colors duration-300"
          >
            Laura &amp; John
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mt-5 mb-4">
            RSVP
          </h1>
          <div className="decorative-divider max-w-20 mx-auto mb-4">
            <span className="text-gold-muted text-xs">&#10047;</span>
          </div>
          <p className="text-stone-warm text-sm">
            Kindly respond by August 19th, 2026
          </p>
        </div>

        {/* Form Card */}
        <div className="form-card rounded-sm p-8 md:p-10 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-stone-warm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="border-border-soft bg-white h-12 text-sm text-charcoal placeholder:text-stone-mid/60 focus-visible:ring-1 focus-visible:ring-charcoal/20 focus-visible:border-charcoal/40 transition-all"
                required
              />
            </div>

            {/* Attending */}
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-[0.15em] text-stone-warm font-medium">
                Will you attend?
              </Label>
              <RadioGroup
                value={attending}
                onValueChange={setAttending}
                className="flex gap-3"
              >
                <label
                  className={`selection-card ${attending === "yes" ? "active" : ""}`}
                >
                  <RadioGroupItem value="yes" id="attending-yes" className="sr-only" />
                  <span className="text-sm text-charcoal">Joyfully Accept</span>
                </label>
                <label
                  className={`selection-card ${attending === "no" ? "active" : ""}`}
                >
                  <RadioGroupItem value="no" id="attending-no" className="sr-only" />
                  <span className="text-sm text-charcoal">Regretfully Decline</span>
                </label>
              </RadioGroup>
            </div>

            {/* Plus One */}
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-[0.15em] text-stone-warm font-medium">
                Will you bring a plus one?
              </Label>
              <RadioGroup
                value={plusOne}
                onValueChange={setPlusOne}
                className="flex gap-3"
              >
                <label
                  className={`selection-card ${plusOne === "yes" ? "active" : ""}`}
                >
                  <RadioGroupItem value="yes" id="plusone-yes" className="sr-only" />
                  <span className="text-sm text-charcoal">Yes</span>
                </label>
                <label
                  className={`selection-card ${plusOne === "no" ? "active" : ""}`}
                >
                  <RadioGroupItem value="no" id="plusone-no" className="sr-only" />
                  <span className="text-sm text-charcoal">No</span>
                </label>
              </RadioGroup>
            </div>

            {/* Error */}
            {formState === "error" && (
              <div className="flex items-center gap-2 text-coral text-sm bg-coral/5 border border-coral/20 px-4 py-3">
                <AlertCircle className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || formState === "loading"}
              className="w-full bg-charcoal text-cream py-4 text-sm uppercase tracking-[0.2em] font-normal border border-charcoal hover:bg-charcoal-light hover:border-charcoal-light transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {formState === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Send RSVP"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
