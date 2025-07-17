import {
  Box,
  Container,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  type TypographyProps,
} from "@mui/material";
import { ATTRIBUTIONS } from "../data/attributions";

const columns = ["Image Description", "Creator", "Source"];

type TextTableCellProps = {
  children: React.ReactNode;
  variant?: TypographyProps["variant"];
  align?: "left" | "right" | "center";
};

const TextTableCell: React.FC<TextTableCellProps> = ({
  children,
  variant = "body1",
  align = "left",
}) => (
  <TableCell align={align}>
    <Typography variant={variant}>{children}</Typography>
  </TableCell>
);

export default function Attributions() {
  return (
    <Container sx={{ py: 4 }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 2 }}>
        <Typography variant="h2" sx={{ lineHeight: 1 }}>
          Attributions
        </Typography>
        <Box
          component="img"
          src="/icons/cat_wand.png"
          sx={{
            width: 50,
            height: 50,
            position: "relative",
            top: "-4px",
          }}
        />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TextTableCell variant="subtitle2" key={col}>
                  {col}
                </TextTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ATTRIBUTIONS.map((item) => (
              <TableRow>
                <TableCell>
                  <Typography>{item.description}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.creator}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <Link href={item.url}>{item.source}</Link>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography sx={{ pt: 4 }}>
        Built with ❤️ using{" "}
        <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          React
        </Link>
        ,{" "}
        <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer">
          Material UI
        </Link>
        , and{" "}
        <Link href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          Vite
        </Link>
        .
      </Typography>
      <Typography sx={{ py: 2 }}>
        Hosted on{" "}
        <Link href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
          GitHub Pages
        </Link>
        .
      </Typography>
    </Container>
  );
}
