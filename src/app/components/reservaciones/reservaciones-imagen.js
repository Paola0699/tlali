import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const ReservacionesImagen = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const marginTopValue = isMdAndLg ? '-5rem' :'-7rem';
  const marginLeftValue = isMdAndLg ? '70%' :'30%';

  return (
    <div style={{ position: "relative" }}>
      <Image
        alt={"membresiasImg"}
        src={"/assets/img/img_2.png"}
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
          d="M131.207 20.9201C131.207 20.9201 146.61 -0.152529 171.898 1.04954C197.186 2.25161 219.791 18.8924 226.801 46.4975C233.618 73.3376 227.317 96.9419 214.937 110.383C202.931 123.406 177.909 124.62 177.909 124.62M169.386 180.996C169.386 180.996 179.066 181.87 184.976 197.885C192.535 218.375 174.994 238.464 174.994 238.464C175.573 225.545 159.325 223.523 146.502 216.663C133.68 209.803 137.451 189.204 142.731 179.618C148.011 170.031 159.087 166.073 165.677 169.017C171.399 171.573 166.743 182.501 160.272 176.983C150.642 168.769 154.051 150.847 197.044 138.158C240.037 125.47 254 175.471 254 175.471C254 175.471 247.716 171.974 233.13 175.738C218.544 179.508 221.816 183.272 204.212 184.086C186.609 184.893 166.306 161.55 166.306 161.55M166.306 161.556C166.306 161.556 222.281 139.804 230.754 156.013C239.227 172.223 189.365 147.86 189.365 147.86M151.277 185.604C151.277 185.604 169.006 205.547 171.268 209.584C173.531 213.621 170.134 220.281 165.801 217.258C161.463 214.229 166.312 189.829 166.312 189.829M195.053 161.848C195.053 161.848 204.263 163.924 210.802 170.651M25.3878 39.88C37.5412 23.0571 65.2848 7.96447 98.8527 12.0017C132.421 16.039 152.792 30.5731 165.988 56.0108C179.191 81.4485 177.303 132.324 164.1 152.11C150.903 171.901 128.53 198.213 85.1057 196.489C43.3259 194.832 11.6408 165.678 2.87879 123.679C-4.90211 86.3782 13.2287 56.709 25.3878 39.88ZM60.6287 84.5508C57.3961 85.8925 56.4774 93.8396 60.6287 95.0477C64.78 96.2619 70.3095 93.4328 69.3057 89.7962C68.2962 86.1657 64.5248 82.9359 60.6287 84.5508ZM142.464 64.3889C143.956 61.3473 140.491 56.2476 137.077 58.506C133.657 60.7644 131.383 66.2648 133.923 67.5883C136.47 68.9118 140.667 68.0558 142.464 64.3889ZM64.7801 114.821C63.419 117.93 67.0939 122.853 70.4116 120.431C73.7292 118.008 75.7709 112.405 73.1735 111.209C70.5817 110.013 66.419 111.075 64.7801 114.821ZM201.791 31.2834C200.526 32.3519 204.383 49.6605 200.237 50.9293C196.091 52.1982 195.649 47.2199 197.645 46.5825C199.641 45.9511 207.893 60.1634 209.64 59.5927C211.387 59.0281 208.976 40.0621 212.526 40.6085C216.082 41.1489 216.23 45.7689 214.007 46.0421C211.789 46.3093 203.056 30.2149 201.791 31.2834ZM123.619 38.7812C127.85 48.3795 101.127 108.647 94.1172 99.9956C87.1076 91.3504 133.685 47.0317 142.816 49.1869C151.947 51.3422 170.582 93.0868 161.894 101.016C153.206 108.944 93.3289 113.771 94.3781 106.953C95.4273 100.135 153.206 100.688 156.727 110.735C160.249 120.783 159.535 127.03 154.368 138.99C149.202 150.95 143.122 166.668 130.81 163.918C118.503 161.168 86.7447 118.1 93.9131 113.328C101.081 108.556 120.778 159.116 114.29 173.279C108.885 185.088 64.4795 188.621 60.3225 170.711C55.4622 149.766 82.168 111.191 86.5689 113.722C90.9697 116.254 65.194 163.869 45.583 161.848C25.972 159.82 16.7279 122.962 21.5995 109.497C26.471 96.0312 82.1056 100.093 83.3646 106.461C84.6236 112.824 25.0362 97.1665 20.4766 89.7355C15.9169 82.3046 36.3389 36.9234 55.2978 39.9589C74.2566 42.9945 94.5085 97.9132 88.9054 101.058C83.3022 104.203 58.3035 43.5409 70.4286 31.6962C82.5536 19.8516 117.8 25.5645 123.619 38.7812Z"
          stroke="#665959"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default ReservacionesImagen;
