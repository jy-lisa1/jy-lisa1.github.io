import { useMediaQuery, useTheme } from "@mui/material";

export function useColumns(): number {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = isXs ? 2 : 3;
  return cols;
}
