"use client";

import React from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ToastProps, ToastConfig, ToastObject } from "./toast";

const MUISimpleToast: React.FC<ToastProps> = ({
  toast,
  setToast,
  anchorOrigin,
  variant,
  duration,
  alertProps,
}) => {
  const onToastClose = () =>
    setToast({
      show: false,
      type: "info",
      message: "",
    });
  const SNACKBAR_CONFIG: ToastConfig = {
    anchorOrigin: { vertical: "top", horizontal: "right" },
    duration: 5000,
    variant: "filled",
  };

  return (
    <Snackbar
      color="#FFF"
      open={toast?.show}
      autoHideDuration={duration || SNACKBAR_CONFIG.duration}
      onClose={onToastClose}
      anchorOrigin={anchorOrigin || SNACKBAR_CONFIG.anchorOrigin}
    >
      <Alert
        severity={toast?.type}
        sx={{ color: "#fff" }}
        action={
          <IconButton
            size="small"
            style={{ color: "inherit" }}
            aria-label="close"
            onClick={onToastClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        variant={variant || SNACKBAR_CONFIG.variant}
        {...alertProps}
      >
        {toast?.message || ""}
      </Alert>
    </Snackbar>
  );
};

export default MUISimpleToast;
export const defaultToast: ToastObject = {
  show: false,
  type: "info",
  message: "",
};
