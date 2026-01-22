import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DemoRequest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    cleanerCount: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.companyName &&
    formData.role &&
    formData.cleanerCount &&
    formData.contact;

  return (
    <div className="min-h-screen bg-foreground">
      {/* Header - Logo only */}
      <header className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="text-lg font-semibold text-primary-foreground"
          >
            CleanProof
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* H1 */}
                <h1 className="text-4xl md:text-5xl font-semibold text-primary-foreground mb-16 tracking-tight">
                  Request a CleanProof demo
                </h1>

                {/* Expectation alignment block */}
                <div className="mb-16 p-8 rounded-lg bg-primary-foreground/[0.03] border border-primary-foreground/10">
                  <div className="space-y-6 text-primary-foreground/70 text-base leading-relaxed">
                    <p className="text-primary-foreground/90 font-medium">
                      CleanProof is a proof system — not a CRM.
                    </p>
                    <p>
                      The workflow is fixed. Nothing can be skipped.
                    </p>
                    <p>
                      The demo shows the real process:<br />
                      <span className="text-primary-foreground/90">
                        job planning → on-site execution → verified PDF report.
                      </span>
                    </p>
                    <p className="pt-2 border-t border-primary-foreground/10 text-primary-foreground/50">
                      If you're looking for a flexible or customizable system,<br />
                      CleanProof is not a good fit.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="companyName"
                        className="text-primary-foreground/70 text-sm"
                      >
                        Company name
                      </Label>
                      <Input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                        className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/30 focus:ring-0 h-12"
                        placeholder=""
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="role"
                        className="text-primary-foreground/70 text-sm"
                      >
                        Your role
                      </Label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) =>
                          handleInputChange("role", value)
                        }
                      >
                        <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground h-12 focus:ring-0 focus:border-primary-foreground/30">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="bg-foreground border-primary-foreground/10">
                          <SelectItem
                            value="owner"
                            className="text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground"
                          >
                            Owner
                          </SelectItem>
                          <SelectItem
                            value="operations-manager"
                            className="text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground"
                          >
                            Operations Manager
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="cleanerCount"
                        className="text-primary-foreground/70 text-sm"
                      >
                        Number of cleaners
                      </Label>
                      <Select
                        value={formData.cleanerCount}
                        onValueChange={(value) =>
                          handleInputChange("cleanerCount", value)
                        }
                      >
                        <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground h-12 focus:ring-0 focus:border-primary-foreground/30">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent className="bg-foreground border-primary-foreground/10">
                          <SelectItem
                            value="1-5"
                            className="text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground"
                          >
                            1–5
                          </SelectItem>
                          <SelectItem
                            value="6-20"
                            className="text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground"
                          >
                            6–20
                          </SelectItem>
                          <SelectItem
                            value="21-50"
                            className="text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground"
                          >
                            21–50
                          </SelectItem>
                          <SelectItem
                            value="50+"
                            className="text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground"
                          >
                            50+
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact"
                        className="text-primary-foreground/70 text-sm"
                      >
                        WhatsApp or email
                      </Label>
                      <Input
                        id="contact"
                        type="text"
                        value={formData.contact}
                        onChange={(e) =>
                          handleInputChange("contact", e.target.value)
                        }
                        className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/30 focus:ring-0 h-12"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={!isFormValid}
                      className="w-full h-14 bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-medium text-base rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                    >
                      Request demo
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="pt-16"
              >
                <h1 className="text-4xl md:text-5xl font-semibold text-primary-foreground mb-8 tracking-tight">
                  Thanks.
                </h1>
                <div className="space-y-4 text-primary-foreground/70 text-lg leading-relaxed">
                  <p>
                    We'll review your request and contact you within one business day.
                  </p>
                  <p className="text-primary-foreground/50">
                    Demos are conducted live and show the real product workflow.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 px-6 py-6 bg-foreground border-t border-primary-foreground/5">
        <div className="max-w-2xl mx-auto">
          <p className="text-primary-foreground/30 text-sm">
            CleanProof — Proof of work for cleaning teams
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DemoRequest;
