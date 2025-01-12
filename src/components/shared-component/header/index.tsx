import { Box, Button, Chip, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ThemeToggleButton from "../ThemeToggleButton";
import { TbFileTypeDocx } from "react-icons/tb";
import { TbFileTypePdf } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { exportToDOCX, exportToPDF } from "@/utils";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [exportLoading, setExportLoading] = useState({
    pdf: false,
    docx: false,
  });
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backdropFilter: "blur(24px)",
        zIndex: 9999,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          {pathname == "/draft" ? (
            <>
              <Chip
                label={
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    {" "}
                    <IoIosArrowBack />{" "}
                    <Typography fontSize="small">Back</Typography>{" "}
                  </Stack>
                }
                onClick={() => router.push("/")}
                className="chip"
              />
            </>
          ) : (
            <>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  background:
                    "linear-gradient(to right, #0A01FF 0%, #CF4EB9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SnapCV
              </Typography>
            </>
          )}

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            {(pathname == "/draft" && !isMobile) && (
              <>
                {" "}
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<TbFileTypePdf />}
                  onClick={exportToPDF}
                  disabled={exportLoading?.pdf}
                >
                  {exportLoading?.pdf ? "Downloding,,," : "Download PDF"}
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 2 }}
                  startIcon={<TbFileTypeDocx />}
                  onClick={exportToDOCX}
                  disabled={exportLoading?.docx}
                >
                  {exportLoading?.docx ? "Downloding,,," : "Download DOCX"}
                </Button>
              </>
            )}

            <ThemeToggleButton />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
