import { AnchorHTMLAttributes, ReactNode } from "react";

import { Button } from "./SocialButton.styles";

interface SocialButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const SocialButton = ({
  children,
  ...props
}: SocialButtonProps) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

export default SocialButton;