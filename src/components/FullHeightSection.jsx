import { Box } from "@mui/material";
import React from "react";

export default function FullHeightSection({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
}
