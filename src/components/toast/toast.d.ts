import { SnackbarOrigin, AlertProps } from "@mui/material";

export interface ToastProps {
  variant?: ToastProps["variant"];
  duration?: number;
  toast: ToastObject;
  setToast: React.Dispatch<SetStateAction<React.ToastObject>>;
  alertProps?: AlertProps;
  anchorOrigin?: SnackbarOrigin;
}

export interface ToastConfig {
  anchorOrigin?: SnackbarOrigin;
  duration?: number;
  variant: ToastProps["variant"];
}

export interface ToastObject {
  show: boolean;
  type?: AlertProps["severity"];
  message?: string;
}
