import { Box, IconButton } from "@mui/material";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

interface IShareButtonProps {
  active?: boolean;
  onClick?: (event?: any) => void;
  reff?: any; //not sure why can not name it 'ref'
}

const ShareButton = ({ reff, active, onClick }: IShareButtonProps) => {
  return (
    <IconButton
      ref={reff}
      onClick={onClick}
      className={classNames(styles["btn-share"], {
        [styles["active"]]: active,
      })}
    >
      <FontAwesomeIcon icon={faShare} />
    </IconButton>
  );
};

export default ShareButton;
