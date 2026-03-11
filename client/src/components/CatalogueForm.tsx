import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import type { z } from "zod";

type FormData = z.infer<typeof insertLeadSchema>;

export function CatalogueForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutate: createLead, isPending, error } = useCreateLead();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: { source: "Bags-LandingPage" }
  });

  const onSubmit = (data: FormData) => {
    createLead(data, {
      onSuccess: () => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, siteContent.form.resetDelayMs);
      }
    });
  };

  return (
    <section id={siteContent.form.sectionId} className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-card rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50">
          
          <div className="text-center mb-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-4">
              {siteContent.form.badgeText}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              {siteContent.form.heading.split('Catalog').map((part, i, arr) => 
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-primary">Catalog</span>}
                </span>
              )}
            </h2>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center"
            >
              <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-2">{siteContent.form.successMessage.title}</h3>
              <p className="text-muted-foreground">{siteContent.form.successMessage.description}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name *</label>
                  <input 
                    {...register("fullName")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Location *</label>
                  <input 
                    {...register("location")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="City, Country"
                  />
                  {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address *</label>
                <input 
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message (Optional)</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {error && (
                <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  Failed to send request. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> {siteContent.form.submitButton.loadingText}</>
                ) : (
                  siteContent.form.submitButton.text
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                {siteContent.form.privacyNote}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
