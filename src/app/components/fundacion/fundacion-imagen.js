import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const FundacionImagen = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const marginTopValue = isMdAndLg ? "250%" : "385%";
  const marginLeftValue = isMdAndLg ? "33%" : "30%";

  return (
    <>
      <Image
        alt={"membresiasImg"}
        src={"/assets/img/img_3.png"}
        width={300}
        height={300}
        style={{ objectFit: "cover" }}
      />
      <svg
        style={{
          width: "250px",
          height: "200px",
          left: marginLeftValue,
          position: "absolute",
          top: marginTopValue,
        }}
        viewBox="0 0 255 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M149.023 34.121C149.023 34.121 147.548 31.8178 155.85 21.2617C164.151 10.7057 182.244 21.5528 182.244 21.5528C182.244 21.5528 168.543 9.21946 155.331 7.92853C142.118 6.63759 133.464 24.7796 132.126 29.8325C130.786 34.8797 134.548 33.9037 138.878 30.1435C143.209 26.3832 135.723 1.60397 135.723 1.60397C135.723 1.60397 128.354 12.4229 120.342 27.2563C112.331 42.0897 107.6 44.1248 104.136 47.8715C100.679 51.6164 93.1307 54.4643 88.9564 52.9864C84.7821 51.5086 74.3884 38.3589 58.4816 36.5369C42.5747 34.7149 29.4918 40.841 29.4918 40.841C29.4918 40.841 43.8352 41.7573 51.1477 46.19C58.4602 50.6227 57.1834 57.9496 61.4968 59.0824C65.8103 60.2152 70.5483 51.0155 63.4073 51.2568C56.2663 51.498 36.3038 49.7592 30.2418 58.9837C24.1797 68.2082 11.436 80.8379 0.723779 80.9991C0.723779 80.9991 25.2166 82.8643 35.4693 73.0574C45.7219 63.2505 62.0406 69.1664 62.0406 69.1664L84.4073 67.1913C84.4073 67.1913 94.5666 65.1876 91.8751 49.138C89.1835 33.0885 90.0251 20.1589 93.1097 19.6964L102.667 21.6485C102.667 21.6485 95.7305 28.3675 102.451 43.5651C109.172 58.7626 111.015 57.2146 111.015 57.2146M101.698 63.6468C110.212 60.0519 124.601 40.9888 141.205 35.3876C163.172 27.9794 193.248 41.2769 206.467 83.5244C218.639 122.43 198.762 168.252 150.905 184.442C95.82 203.075 56.5557 188.355 35.2311 140.938C18.76 104.297 32.9033 78.4917 49.1072 71.8845C64.0903 65.7728 85.6691 70.4154 101.698 63.6468ZM66.7222 80.8897C82.5346 74.6995 96.1708 80.5924 103.697 94.8703C108.347 103.694 119.49 133.807 122.875 143.873C126.26 153.94 128.984 170.853 109.709 175.903C92.1392 180.501 79.0396 175.198 66.861 161.023C54.7758 146.959 42.1969 122.716 45.9524 104.78C49.7078 86.8431 57.8605 84.3618 66.7222 80.8897ZM143.96 53.0168C152.748 50.0558 171.053 47.7509 179.207 63.1073C187.355 78.4654 196.879 107.737 192.091 125.153C187.305 142.575 172.744 163.906 151.316 154.41C135.105 147.226 118.603 83.9429 122.062 73.3072C127.024 58.0558 143.96 53.0168 143.96 53.0168ZM81.4308 89.1565C79.1532 90.423 77.3773 93.4651 82.0462 99.0413C87.3197 105.334 91.9891 105.466 90.6764 98.7196C89.1118 90.6454 84.686 87.3466 81.4308 89.1565ZM137.074 69.3704C134.436 69.6693 131.634 71.7608 134.086 78.5375C136.856 86.1864 141.28 88.0336 142.47 81.4555C143.889 73.5686 140.845 68.9423 137.074 69.3704ZM162.703 66.6394C160.115 65.7288 156.599 66.2979 155.946 73.2592C155.207 81.1177 158.523 84.6866 162.482 79.5154C167.232 73.3065 166.403 67.9401 162.703 66.6394ZM180.841 97.0919C180.813 94.3787 179.054 91.0628 172.2 91.8621C164.462 92.7584 162.215 96.7305 168.513 99.5279C176.064 102.882 180.883 100.973 180.841 97.0919ZM178.568 124.167C179.948 121.946 180.096 118.311 173.579 115.322C166.223 111.941 162.167 113.982 166.326 119.607C171.313 126.346 176.596 127.347 178.568 124.167ZM164.985 146.725C167.201 145.363 168.844 142.236 163.965 136.84C158.453 130.751 153.801 130.821 155.382 137.522C157.274 145.557 161.818 148.68 164.985 146.725ZM61.7279 101.999C59.884 103.832 58.9613 107.287 64.7845 111.592C71.3614 116.454 75.8228 115.385 72.895 109.067C69.3926 101.503 64.367 99.3787 61.7279 101.999ZM60.8726 135.085C61.468 137.769 63.8612 140.683 70.2839 138.415C77.5334 135.856 78.8608 131.428 72.2151 130.005C64.2448 128.303 60.0154 131.238 60.8726 135.085ZM79.1246 159.03C81.2157 160.886 84.7687 161.795 88.1229 155.875C91.9116 149.186 90.172 144.677 84.3872 147.683C77.4627 151.28 76.1372 156.381 79.1246 159.03ZM101.991 168.061C104.424 169.374 108.029 169.397 109.798 162.721C111.794 155.178 109.054 151.155 104.267 155.549C98.5313 160.813 98.4995 166.178 101.991 168.061Z"
          stroke="#665959"
          stroke-miterlimit="10"
        />
      </svg>
    </>
  );
};

export default FundacionImagen;
