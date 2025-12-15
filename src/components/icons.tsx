import { SVGProps } from "react";

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      {/* Google Play Store Üçgen Logosu */}
      <path d="M5 3.5L19 12L5 20.5V3.5Z" />
      <path d="M5 3.5L19 12L5 20.5V3.5Z" opacity="0.1" /> {/* Hafif derinlik için opsiyonel gölge */}
    </svg>
  );
}

export function AppStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      {/* Resmi Apple Logosu */}
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.68-.83 1.14-1.99 1.01-3.15-1.02.05-2.29.69-3.02 1.55-.63.74-1.17 1.92-1.02 3.05 1.14.09 2.31-.61 3.03-1.45" />
    </svg>
  );
}