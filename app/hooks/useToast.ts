import { toast } from "sonner";

export const useToast = () => {
  return {
    success: toast.success("Success"),
    error: toast.error("Error"),
    info: toast.info("Info"),
    warning: toast.warning("Warning"),
  };
};
