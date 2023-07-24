import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";

const FundadorImagen = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const marginTopValue = isMdAndLg ? "1.2rem" : "7rem";
  const marginLeftValue = isMdAndLg ? "60%" : "30%";
  return (
    <div style={{ position: "relative" }}>
      <svg
        width="206"
        height="191"
        viewBox="0 0 206 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "250px",
          height: "200px",
          left: marginLeftValue,
          position: "absolute",
          top: marginTopValue,
        }}
      >
        <path
          opacity="0.48"
          d="M92.6055 61.7941C92.6055 90.3505 82.316 117.502 61.737 143.25C41.158 168.998 23.7289 184.914 9.44954 191L0 174.147C14.2793 165.721 26.4587 153.315 36.5382 136.93C46.6177 120.545 52.4975 103.692 54.1774 86.3713C49.1376 89.1801 42.208 90.5845 33.3884 90.5845C24.9888 90.5845 17.6391 86.3713 11.3395 77.9448C5.45974 69.5184 2.51988 58.5172 2.51988 44.9412C2.51988 30.8971 6.92966 19.8959 15.7492 11.9375C24.5688 3.97918 35.4883 0 48.5077 0C61.947 0 72.6565 5.14951 80.6361 15.4485C88.6157 25.2794 92.6055 40.728 92.6055 61.7941ZM206 61.7941C206 90.3505 195.711 117.502 175.132 143.25C154.553 168.998 137.123 184.914 122.844 191L113.395 174.147C127.674 165.721 139.853 153.315 149.933 136.93C160.012 120.545 165.892 103.692 167.572 86.3713C162.532 89.1801 155.602 90.5845 146.783 90.5845C138.383 90.5845 131.034 86.3713 124.734 77.9448C118.854 69.5184 115.914 58.5172 115.914 44.9412C115.914 30.8971 120.324 19.8959 129.144 11.9375C137.963 3.97918 148.883 0 161.902 0C175.342 0 186.051 5.14951 194.031 15.4485C202.01 25.2794 206 40.728 206 61.7941Z"
          fill="#A9BDB1"
          fillOpacity="0.35"
        />
      </svg>
    </div>
  );
};

export default FundadorImagen;
