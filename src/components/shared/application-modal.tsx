"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { applicationContent } from "@/content/application";
import {
  applicationSchema,
  buildApplicationMailto,
  type ApplicationFormValues,
} from "@/lib/application";
import { track } from "@/lib/analytics";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ctaLocation: string;
}

export function ApplicationModal({ open, onOpenChange, ctaLocation }: ApplicationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hasStartedRef = useRef(false);
  const lastFieldTouchedRef = useRef<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { name: "", email: "", qualifyingAnswer: "" },
  });

  function markStarted(field: string) {
    lastFieldTouchedRef.current = field;
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      track("application_form_started", { cta_location: ctaLocation });
    }
  }

  function onSubmit(values: ApplicationFormValues) {
    track("application_form_completed", { cta_location: ctaLocation });
    setIsSubmitted(true);
    window.location.href = buildApplicationMailto(values);
  }

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      track("application_form_opened", { cta_location: ctaLocation });
    } else if (hasStartedRef.current && !isSubmitted) {
      track("application_form_abandoned", {
        cta_location: ctaLocation,
        last_field_touched: lastFieldTouchedRef.current ?? "none",
      });
    }

    if (!nextOpen) {
      hasStartedRef.current = false;
      lastFieldTouchedRef.current = null;
      setIsSubmitted(false);
      reset();
    }

    onOpenChange(nextOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        {isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>{applicationContent.successTitle}</DialogTitle>
              <DialogDescription>{applicationContent.successDescription}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                ctaLocation={`${ctaLocation}-modal-close`}
                onClick={() => handleOpenChange(false)}
              >
                Đóng
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{applicationContent.title}</DialogTitle>
              <DialogDescription>{applicationContent.description}</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="application-name">{applicationContent.fields.name.label}</Label>
                <Input
                  id="application-name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  onFocus={() => markStarted("name")}
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="text-caption text-error">{errors.name.message}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="application-email">{applicationContent.fields.email.label}</Label>
                <Input
                  id="application-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  onFocus={() => markStarted("email")}
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="text-caption text-error">{errors.email.message}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="application-answer">
                  {applicationContent.fields.qualifyingAnswer.label}
                </Label>
                <Textarea
                  id="application-answer"
                  aria-invalid={Boolean(errors.qualifyingAnswer)}
                  onFocus={() => markStarted("qualifyingAnswer")}
                  {...register("qualifyingAnswer")}
                />
                {errors.qualifyingAnswer ? (
                  <p className="text-caption text-error">{errors.qualifyingAnswer.message}</p>
                ) : null}
              </div>
              <Button
                type="submit"
                loading={isSubmitting}
                ctaLocation={`${ctaLocation}-modal-submit`}
              >
                {applicationContent.submitLabel}
              </Button>
              <p className="text-caption text-muted-2">{applicationContent.submitNote}</p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
