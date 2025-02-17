import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import ThemeToggleButton from "../ThemeToggleButton";
import { TbFileTypeDocx } from "react-icons/tb";
import { TbFileTypePdf } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { exportToDOCX, exportToPDF, downloadReport } from "@/utils";
import { HeaderProps } from "@/@types";

const Header: React.FC<HeaderProps> = ({ isKeyDataExist }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [exportLoading] = useState({
    pdf: false,
    docx: false,
    report: false,
  });
  const isMobile = useMediaQuery("(max-width:600px)");

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
          <Stack direction="row" spacing={2} justifyContent="flex-start">
            {pathname == "/draft" ||
              (pathname == "/ats-and-feedback-result" && (
                <>
                  <Chip
                    label={
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        {" "}
                        <IoIosArrowBack />{" "}
                        <Typography fontSize="small">Back</Typography>{" "}
                      </Stack>
                    }
                    onClick={() => router.replace("/")}
                    className="chip"
                  />
                </>
              ))}
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                background:
                  "linear-gradient(to right, #0A01FF 0%, #CF4EB9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              SnapCV
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            {pathname == "/draft" && !isMobile && (
              <>
                {" "}
                <Button
                  variant="contained"
                  color="success"
                  sx={{ backgroundColor: "#4caf50" }}
                  startIcon={<TbFileTypePdf />}
                  onClick={exportToPDF}
                  disabled={exportLoading?.pdf}
                >
                  {exportLoading?.pdf ? "Downloding,,," : "Download PDF"}
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ backgroundColor: "#4caf50" }}
                  startIcon={<TbFileTypeDocx />}
                  onClick={exportToDOCX}
                  disabled={exportLoading?.docx}
                >
                  {exportLoading?.docx ? "Downloding,,," : "Download DOCX"}
                </Button>
              </>
            )}

            {pathname == "/ats-and-feedback-result" && isKeyDataExist && (
              <>
                {" "}
                <Button
                  variant="contained"
                  color="success"
                  sx={{ backgroundColor: "#4caf50" }}
                  startIcon={<FaRegFileAlt />}
                  onClick={downloadReport}
                  disabled={exportLoading?.report}
                >
                  {exportLoading?.pdf ? "Downloding,,," : "Download Report"}
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
