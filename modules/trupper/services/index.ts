import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const waitlistSchema = z.object({
  email: z.string().email(),
  organization: z.string().optional(),
});

export const useWaitlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const addToWaitlist = async (data: z.infer<typeof waitlistSchema>) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://trupper-backend.amidarh.com/api/v1/waitlist",
        data,
      );
      if (response.status === 200) {
        setIsLoading(false);
        setSuccess("You have been added to the waitlist");
        toast.success("You have been added to the waitlist");
        setError(null);
      } else {
        setIsLoading(false);
        setError(
          response.status === 400 ? response.data.message : "An error occurred",
        );
        toast.error(
          response.status === 400 ? response.data.message : "An error occurred",
        );
        setSuccess(null);
      }
    } catch (error: any) {
      setIsLoading(false);
      setError(
        error.response ? error.response.data.message : "An error occurred",
      );
      toast.error(
        error.response ? error.response.data.message : "An error occurred",
      );
    }
  };

  return {
    addToWaitlist,
    isLoading,
    error,
    success,
  };
};
