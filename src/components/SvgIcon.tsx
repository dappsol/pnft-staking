import { FC } from "react";

interface IconProps {
  color?: string;
  className?: string;
  fill?: string;
}

export const ArrowLine: FC<IconProps> = ({
  className = "",
  fill = "white",
}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
        <rect
          y="12"
          width="12"
          height="12"
          transform="rotate(-90 0 12)"
          fill={fill}
        />
      </mask>
      <g mask="url(#mask0_394_15152)">
        <path
          d="M7.47501 6.00001C7.47501 6.06667 7.4646 6.12917 7.44376 6.18751C7.42293 6.24584 7.38751 6.30001 7.33751 6.35001L5.03751 8.65001C4.94585 8.74167 4.82918 8.78751 4.68751 8.78751C4.54585 8.78751 4.42918 8.74167 4.33751 8.65001C4.24585 8.55834 4.20001 8.44167 4.20001 8.30001C4.20001 8.15834 4.24585 8.04167 4.33751 7.95001L6.28751 6.00001L4.33751 4.05001C4.24585 3.95834 4.20001 3.84167 4.20001 3.70001C4.20001 3.55834 4.24585 3.44167 4.33751 3.35001C4.42918 3.25834 4.54585 3.21251 4.68751 3.21251C4.82918 3.21251 4.94585 3.25834 5.03751 3.35001L7.33751 5.65001C7.38751 5.70001 7.42293 5.75417 7.44376 5.81251C7.4646 5.87084 7.47501 5.93334 7.47501 6.00001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const SolanaIcon: FC<IconProps> = ({
  className = "",
  fill = "white",
}) => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.50036 0H1.24971C1.09469 0 0.944686 0.0794115 0.849677 0.211764L0.0996095 1.27058C-0.145413 1.61999 0.0896025 2.11764 0.499639 2.11764H7.75029C7.90531 2.11764 8.05531 2.03823 8.15032 1.90588L8.90039 0.847056C9.14541 0.497645 8.9104 0 8.50036 0Z"
        fill={fill}
      />
      <path
        d="M0.499639 3.44092H7.75029C7.90531 3.44092 8.05531 3.52033 8.15032 3.65268L8.90039 4.7115C9.14541 5.06091 8.9104 5.55856 8.50036 5.55856H1.24971C1.09469 5.55856 0.944686 5.47915 0.849677 5.34679L0.0996095 4.28797C-0.145413 3.93856 0.0896025 3.44092 0.499639 3.44092Z"
        fill={fill}
      />
      <path
        d="M8.50036 6.88232H1.24971C1.09469 6.88232 0.944686 6.96174 0.849677 7.09409L0.0996095 8.15291C-0.145413 8.50232 0.0896025 8.99996 0.499639 8.99996H7.75029C7.90531 8.99996 8.05531 8.92055 8.15032 8.7882L8.90039 7.72938C9.14541 7.37997 8.9104 6.88232 8.50036 6.88232Z"
        fill={fill}
      />
    </svg>
  );
};

export const WalletIcon: FC<IconProps> = ({
  className = "",
  fill = "#435854",
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g mask="url(#mask0_75_320733)">
        <path
          d="M3.50008 11.6668C2.85841 11.6668 2.30911 11.4384 1.85216 10.9814C1.39522 10.5245 1.16675 9.97516 1.16675 9.3335V4.66683C1.16675 4.02516 1.39522 3.47586 1.85216 3.01891C2.30911 2.56197 2.85841 2.3335 3.50008 2.3335H10.5001C11.1417 2.3335 11.6911 2.56197 12.148 3.01891C12.6049 3.47586 12.8334 4.02516 12.8334 4.66683V9.3335C12.8334 9.97516 12.6049 10.5245 12.148 10.9814C11.6911 11.4384 11.1417 11.6668 10.5001 11.6668H3.50008ZM3.50008 4.66683H10.5001C10.714 4.66683 10.9181 4.69113 11.1126 4.73975C11.307 4.78836 11.4917 4.86613 11.6667 4.97308V4.66683C11.6667 4.346 11.5525 4.07134 11.324 3.84287C11.0956 3.6144 10.8209 3.50016 10.5001 3.50016H3.50008C3.17925 3.50016 2.9046 3.6144 2.67612 3.84287C2.44765 4.07134 2.33341 4.346 2.33341 4.66683V4.97308C2.50841 4.86613 2.69314 4.78836 2.88758 4.73975C3.08203 4.69113 3.28619 4.66683 3.50008 4.66683ZM2.42091 6.56266L8.9105 8.13766C8.998 8.15711 9.0855 8.15711 9.173 8.13766C9.2605 8.11822 9.34314 8.07933 9.42092 8.021L11.448 6.32933C11.3411 6.1835 11.2049 6.0644 11.0397 5.97204C10.8744 5.87968 10.6945 5.8335 10.5001 5.8335H3.50008C3.2473 5.8335 3.02612 5.89912 2.83654 6.03037C2.64696 6.16162 2.50841 6.33905 2.42091 6.56266Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const ExitIcon: FC<IconProps> = ({
  className = "",
  fill = "#435854",
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g mask="url(#mask0_75_320739)">
        <path
          d="M11.7542 7.58333H5.25C5.08472 7.58333 4.94618 7.52743 4.83437 7.41563C4.72257 7.30382 4.66667 7.16528 4.66667 7C4.66667 6.83472 4.72257 6.69618 4.83437 6.58437C4.94618 6.47257 5.08472 6.41667 5.25 6.41667H11.7542L11.2583 5.92083C11.1417 5.80417 11.0858 5.66806 11.0906 5.5125C11.0955 5.35694 11.1514 5.22083 11.2583 5.10417C11.375 4.9875 11.5135 4.92674 11.674 4.92188C11.8344 4.91701 11.9729 4.97292 12.0896 5.08958L13.5917 6.59167C13.7083 6.70833 13.7667 6.84444 13.7667 7C13.7667 7.15556 13.7083 7.29167 13.5917 7.40833L12.0896 8.91042C11.9729 9.02708 11.8344 9.08299 11.674 9.07812C11.5135 9.07326 11.375 9.0125 11.2583 8.89583C11.1514 8.77917 11.0955 8.64306 11.0906 8.4875C11.0858 8.33194 11.1417 8.19583 11.2583 8.07917L11.7542 7.58333ZM8.75 4.66667V2.91667H2.91667V11.0833H8.75V9.33333C8.75 9.16806 8.8059 9.02951 8.91771 8.91771C9.02951 8.8059 9.16806 8.75 9.33333 8.75C9.49861 8.75 9.63715 8.8059 9.74896 8.91771C9.86076 9.02951 9.91667 9.16806 9.91667 9.33333V11.0833C9.91667 11.4042 9.80243 11.6788 9.57396 11.9073C9.34549 12.1358 9.07083 12.25 8.75 12.25H2.91667C2.59583 12.25 2.32118 12.1358 2.09271 11.9073C1.86424 11.6788 1.75 11.4042 1.75 11.0833V2.91667C1.75 2.59583 1.86424 2.32118 2.09271 2.09271C2.32118 1.86424 2.59583 1.75 2.91667 1.75H8.75C9.07083 1.75 9.34549 1.86424 9.57396 2.09271C9.80243 2.32118 9.91667 2.59583 9.91667 2.91667V4.66667C9.91667 4.83194 9.86076 4.97049 9.74896 5.08229C9.63715 5.1941 9.49861 5.25 9.33333 5.25C9.16806 5.25 9.02951 5.1941 8.91771 5.08229C8.8059 4.97049 8.75 4.83194 8.75 4.66667Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const CheckMark: FC<IconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1333 17.6L19.5333 8.2L17.6667 6.33333L10.1333 13.8667L6.33333 10.0667L4.46667 11.9333L10.1333 17.6ZM2.66667 24C1.93333 24 1.30578 23.7391 0.784 23.2173C0.262222 22.6956 0.000888889 22.0676 0 21.3333V2.66667C0 1.93333 0.261333 1.30578 0.784 0.784C1.30667 0.262222 1.93422 0.000888889 2.66667 0H21.3333C22.0667 0 22.6947 0.261333 23.2173 0.784C23.74 1.30667 24.0009 1.93422 24 2.66667V21.3333C24 22.0667 23.7391 22.6947 23.2173 23.2173C22.6956 23.74 22.0676 24.0009 21.3333 24H2.66667Z"
        fill="#DB2777"
      />
    </svg>
  );
};

export const ExpandIcon: FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.92857 2.25C1.92857 2.16475 1.96244 2.083 2.02272 2.02272C2.083 1.96244 2.16475 1.92857 2.25 1.92857H2.89286C3.1486 1.92857 3.39387 1.82698 3.57471 1.64614C3.75555 1.4653 3.85714 1.22003 3.85714 0.964286C3.85714 0.708541 3.75555 0.463271 3.57471 0.282433C3.39387 0.101594 3.1486 0 2.89286 0L2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 2.89286C0 3.1486 0.101594 3.39387 0.282433 3.57471C0.463271 3.75555 0.708541 3.85714 0.964286 3.85714C1.22003 3.85714 1.4653 3.75555 1.64614 3.57471C1.82698 3.39387 1.92857 3.1486 1.92857 2.89286V2.25ZM14.1429 0.964286C14.1429 0.708541 14.2445 0.463271 14.4253 0.282433C14.6061 0.101594 14.8514 0 15.1071 0L15.75 0C16.992 0 18 1.008 18 2.25V2.89286C18 3.1486 17.8984 3.39387 17.7176 3.57471C17.5367 3.75555 17.2915 3.85714 17.0357 3.85714C16.78 3.85714 16.5347 3.75555 16.3539 3.57471C16.173 3.39387 16.0714 3.1486 16.0714 2.89286V2.25C16.0714 2.16475 16.0376 2.083 15.9773 2.02272C15.917 1.96244 15.8352 1.92857 15.75 1.92857H15.1071C14.8514 1.92857 14.6061 1.82698 14.4253 1.64614C14.2445 1.4653 14.1429 1.22003 14.1429 0.964286ZM4.5 6.42857C4.5 5.91708 4.70319 5.42654 5.06487 5.06487C5.42654 4.70319 5.91708 4.5 6.42857 4.5H11.5714C12.0829 4.5 12.5735 4.70319 12.9351 5.06487C13.2968 5.42654 13.5 5.91708 13.5 6.42857V11.5714C13.5 12.0829 13.2968 12.5735 12.9351 12.9351C12.5735 13.2968 12.0829 13.5 11.5714 13.5H6.42857C5.91708 13.5 5.42654 13.2968 5.06487 12.9351C4.70319 12.5735 4.5 12.0829 4.5 11.5714V6.42857ZM17.0357 14.1429C17.2915 14.1429 17.5367 14.2445 17.7176 14.4253C17.8984 14.6061 18 14.8514 18 15.1071V15.75C18 16.3467 17.7629 16.919 17.341 17.341C16.919 17.7629 16.3467 18 15.75 18H15.1071C14.8514 18 14.6061 17.8984 14.4253 17.7176C14.2445 17.5367 14.1429 17.2915 14.1429 17.0357C14.1429 16.78 14.2445 16.5347 14.4253 16.3539C14.6061 16.173 14.8514 16.0714 15.1071 16.0714H15.75C15.8352 16.0714 15.917 16.0376 15.9773 15.9773C16.0376 15.917 16.0714 15.8352 16.0714 15.75V15.1071C16.0714 14.8514 16.173 14.6061 16.3539 14.4253C16.5347 14.2445 16.78 14.1429 17.0357 14.1429ZM1.92857 15.1071C1.92857 14.8514 1.82698 14.6061 1.64614 14.4253C1.4653 14.2445 1.22003 14.1429 0.964286 14.1429C0.708541 14.1429 0.463271 14.2445 0.282433 14.4253C0.101594 14.6061 0 14.8514 0 15.1071L0 15.75C0 16.992 1.008 18 2.25 18H2.89286C3.1486 18 3.39387 17.8984 3.57471 17.7176C3.75555 17.5367 3.85714 17.2915 3.85714 17.0357C3.85714 16.78 3.75555 16.5347 3.57471 16.3539C3.39387 16.173 3.1486 16.0714 2.89286 16.0714H2.25C2.16475 16.0714 2.083 16.0376 2.02272 15.9773C1.96244 15.917 1.92857 15.8352 1.92857 15.75V15.1071ZM6.75 17.0357C6.75 16.78 6.85159 16.5347 7.03243 16.3539C7.21327 16.173 7.45854 16.0714 7.71429 16.0714H10.2857C10.5415 16.0714 10.7867 16.173 10.9676 16.3539C11.1484 16.5347 11.25 16.78 11.25 17.0357C11.25 17.2915 11.1484 17.5367 10.9676 17.7176C10.7867 17.8984 10.5415 18 10.2857 18H7.71429C7.45854 18 7.21327 17.8984 7.03243 17.7176C6.85159 17.5367 6.75 17.2915 6.75 17.0357ZM7.71429 0C7.45854 0 7.21327 0.101594 7.03243 0.282433C6.85159 0.463271 6.75 0.708541 6.75 0.964286C6.75 1.22003 6.85159 1.4653 7.03243 1.64614C7.21327 1.82698 7.45854 1.92857 7.71429 1.92857H10.2857C10.5415 1.92857 10.7867 1.82698 10.9676 1.64614C11.1484 1.4653 11.25 1.22003 11.25 0.964286C11.25 0.708541 11.1484 0.463271 10.9676 0.282433C10.7867 0.101594 10.5415 0 10.2857 0L7.71429 0ZM0.964286 6.75C1.22003 6.75 1.4653 6.85159 1.64614 7.03243C1.82698 7.21327 1.92857 7.45854 1.92857 7.71429V10.2857C1.92857 10.5415 1.82698 10.7867 1.64614 10.9676C1.4653 11.1484 1.22003 11.25 0.964286 11.25C0.708541 11.25 0.463271 11.1484 0.282433 10.9676C0.101594 10.7867 0 10.5415 0 10.2857L0 7.71429C0 7.45854 0.101594 7.21327 0.282433 7.03243C0.463271 6.85159 0.708541 6.75 0.964286 6.75ZM18 7.71429C18 7.45854 17.8984 7.21327 17.7176 7.03243C17.5367 6.85159 17.2915 6.75 17.0357 6.75C16.78 6.75 16.5347 6.85159 16.3539 7.03243C16.173 7.21327 16.0714 7.45854 16.0714 7.71429V10.2857C16.0714 10.5415 16.173 10.7867 16.3539 10.9676C16.5347 11.1484 16.78 11.25 17.0357 11.25C17.2915 11.25 17.5367 11.1484 17.7176 10.9676C17.8984 10.7867 18 10.5415 18 10.2857V7.71429Z"
        fill="white"
      />
    </svg>
  );
};

export const CloseIcon: FC<IconProps> = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.44728 0.44728C0.733759 0.160887 1.12226 0 1.52734 0C1.93242 0 2.32092 0.160887 2.6074 0.44728L8.00922 5.8491L13.411 0.44728C13.6992 0.169003 14.0851 0.015023 14.4856 0.0185037C14.8862 0.0219843 15.2693 0.182647 15.5526 0.465889C15.8358 0.74913 15.9965 1.13229 15.9999 1.53284C16.0034 1.93339 15.8494 2.31928 15.5712 2.6074L10.1693 8.00922L15.5712 13.411C15.8494 13.6992 16.0034 14.0851 15.9999 14.4856C15.9965 14.8862 15.8358 15.2693 15.5526 15.5526C15.2693 15.8358 14.8862 15.9965 14.4856 15.9999C14.0851 16.0034 13.6992 15.8494 13.411 15.5712L8.00922 10.1693L2.6074 15.5712C2.31928 15.8494 1.93339 16.0034 1.53284 15.9999C1.13229 15.9965 0.74913 15.8358 0.465889 15.5526C0.182647 15.2693 0.0219843 14.8862 0.0185037 14.4856C0.015023 14.0851 0.169003 13.6992 0.44728 13.411L5.8491 8.00922L0.44728 2.6074C0.160887 2.32092 0 1.93242 0 1.52734C0 1.12226 0.160887 0.733759 0.44728 0.44728Z"
        fill="white"
      />
    </svg>
  );
};

export const Spinner: FC<IconProps> = ({
  className = "w-10 h-10 text-gray-200 animate-spin fill-pink-600",
}) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};

export const LockIcon: FC<IconProps> = ({ className = "", fill = "black" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 12C4 11.057 4 10.586 4.293 10.293C4.586 10 5.057 10 6 10H18C18.943 10 19.414 10 19.707 10.293C20 10.586 20 11.057 20 12V18.038C20 18.418 20 18.609 19.971 18.778C19.9149 19.1031 19.7793 19.4093 19.5762 19.6692C19.3731 19.9292 19.1089 20.1349 18.807 20.268C18.651 20.338 18.466 20.384 18.097 20.476C16.859 20.786 16.24 20.94 15.621 21.054C13.227 21.494 10.773 21.494 8.378 21.054C7.76 20.94 7.141 20.785 5.904 20.476C5.534 20.384 5.349 20.337 5.194 20.269C4.89171 20.1359 4.6271 19.9299 4.42381 19.6696C4.22052 19.4092 4.08488 19.1026 4.029 18.777C4 18.61 4 18.42 4 18.037V12Z"
        fill={fill}
        fillOpacity="0.25"
      />
      <path
        d="M16.5 10V9C16.5 7.80653 16.0259 6.66193 15.182 5.81802C14.3381 4.97411 13.1935 4.5 12 4.5C10.8065 4.5 9.66193 4.97411 8.81802 5.81802C7.97411 6.66193 7.5 7.80653 7.5 9V10"
        stroke={fill}
      />
      <path
        d="M12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z"
        fill={fill}
      />
      <path d="M12 16V18.5" stroke={fill} strokeLinecap="round" />
    </svg>
  );
};