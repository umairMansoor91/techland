import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Loader2, CheckCircle2, Send, Upload, X, FileText } from "lucide-react";
import {
  submitDeveloperApplication,
  POSITION_OPTIONS,
  WORK_MODE_OPTIONS,
  ENGLISH_PROFICIENCY_OPTIONS,
} from "@/lib/api";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  years_of_experience: z.coerce.number().min(0, "Required").max(50, "Please enter a valid number"),
  position: z.string().min(1, "Please select a position"),
  work_mode: z.string().min(1, "Please select work mode"),
  available_from: z.string().min(1, "Please select availability date"),
  notice_period: z.string().optional(),
  primary_skills: z.string().min(5, "Please list your primary skills"),
  programming_languages: z.string().min(2, "Please list programming languages"),
  frameworks: z.string().min(2, "Please list frameworks/tools"),
  portfolio_url: z.string().url().optional().or(z.literal("")),
  github_url: z.string().url().optional().or(z.literal("")),
  linkedin_url: z.string().url().optional().or(z.literal("")),
  english_proficiency: z.string().min(1, "Please select proficiency level"),
  cover_letter: z.string().optional(),
  willing_to_relocate: z.boolean().default(false),
  honeypot: z.string().max(0, ""),
});

type FormData = z.infer<typeof formSchema>;

interface DeveloperApplicationFormProps {
  preselectedPosition?: string;
}

export default function DeveloperApplicationForm({ preselectedPosition }: DeveloperApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      years_of_experience: 0,
      position: preselectedPosition || "",
      work_mode: "",
      available_from: "",
      notice_period: "",
      primary_skills: "",
      programming_languages: "",
      frameworks: "",
      portfolio_url: "",
      github_url: "",
      linkedin_url: "",
      english_proficiency: "",
      cover_letter: "",
      willing_to_relocate: false,
      honeypot: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setResumeError(null);

    if (!file) {
      setResumeFile(null);
      return;
    }

    // Validate file type
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setResumeError('Only PDF files are allowed');
      setResumeFile(null);
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setResumeError('File size must be less than 5MB');
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  const removeFile = () => {
    setResumeFile(null);
    setResumeError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  async function onSubmit(data: FormData) {
    if (data.honeypot) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await submitDeveloperApplication({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        years_of_experience: Number(data.years_of_experience),
        position: data.position,
        work_mode: data.work_mode,
        available_from: data.available_from,
        notice_period: data.notice_period,
        primary_skills: data.primary_skills,
        programming_languages: data.programming_languages,
        frameworks: data.frameworks,
        portfolio_url: data.portfolio_url,
        github_url: data.github_url,
        linkedin_url: data.linkedin_url,
        english_proficiency: data.english_proficiency,
        cover_letter: data.cover_letter,
        willing_to_relocate: data.willing_to_relocate,
        resume: resumeFile || undefined,
      });
      setIsSuccess(true);
      form.reset();
      setResumeFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for applying to TechLand. Our HR team will review your application and get back to you within 5-7 business days.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Application
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
        <p className="text-muted-foreground">
          Fill out the form below to apply for a position at TechLand.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot */}
          <input
            type="text"
            {...form.register("honeypot")}
            className="absolute opacity-0 pointer-events-none"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b pb-2">Personal Information</h4>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 234 567 890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="years_of_experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience *</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" max="50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Position Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b pb-2">Position Details</h4>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position Applying For *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {POSITION_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="work_mode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Work Mode *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select work mode" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {WORK_MODE_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="available_from"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available From *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notice_period"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notice Period</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 2 weeks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b pb-2">Technical Skills</h4>

            <FormField
              control={form.control}
              name="primary_skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Skills *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., React, Node.js, PostgreSQL, AWS" {...field} />
                  </FormControl>
                  <FormDescription>Comma-separated list of your main skills</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="programming_languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Programming Languages *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., JavaScript, Python, Go" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="frameworks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frameworks & Tools *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., React, Django, Docker" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="english_proficiency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>English Proficiency *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ENGLISH_PROFICIENCY_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Resume Upload */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b pb-2">Resume</h4>

            <div className="space-y-2">
              <FormLabel>Upload Resume (PDF only, max 5MB)</FormLabel>

              {!resumeFile ? (
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PDF only (max 5MB)</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border">
                  <FileText className="w-8 h-8 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{resumeFile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {resumeError && (
                <p className="text-sm text-destructive">{resumeError}</p>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b pb-2">Links (Optional)</h4>

            <div className="grid md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="portfolio_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://portfolio.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="github_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://github.com/username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedin_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b pb-2">Additional Information</h4>

            <FormField
              control={form.control}
              name="cover_letter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you'd like to join TechLand and what makes you a great fit..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="willing_to_relocate"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I am willing to relocate if required</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
              {error}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </>
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
