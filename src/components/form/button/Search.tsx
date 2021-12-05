import { designVariables } from "../../../styles/globalVariables";
import { IconButtonTemplate } from "./IconButtonTemplate";

export const Search = (props: {
  width?: string;
  height?: string;
  hoverColor?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}) => {
  const iconSvg = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7067 22.293L16.8818 15.468C18.2038 13.835 18.9998 11.76 18.9998 9.50002C18.9998 4.26202 14.7378 0 9.49986 0C4.26192 0 0 4.26197 0 9.49997C0 14.738 4.26197 19 9.49991 19C11.7599 19 13.8349 18.204 15.4678 16.882L22.2928 23.707C22.4878 23.902 22.7437 24 22.9998 24C23.2558 24 23.5118 23.902 23.7068 23.707C24.0978 23.316 24.0978 22.684 23.7067 22.293ZM9.49991 17C5.36394 17 1.99999 13.636 1.99999 9.49997C1.99999 5.36395 5.36394 1.99997 9.49991 1.99997C13.6359 1.99997 16.9998 5.36395 16.9998 9.49997C16.9998 13.636 13.6358 17 9.49991 17Z"
        fill="#252932"
      />
    </svg>
  );
  return <IconButtonTemplate svgImage={iconSvg()} {...props} />;
};
