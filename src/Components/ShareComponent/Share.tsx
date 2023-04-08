import { Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

interface IShareProps {
  compact?: boolean;
  closeButton?: any;
}

const Share = ({ closeButton, compact }: IShareProps) => {
  return (
    <Box
      className={classNames(styles["container"], {
        [styles["compact"]]: compact,
      })}
    >
      <Box className={styles["share"]}>
        <Typography className={styles["text"]}>SHARE</Typography>
        <IconButton
          className={classNames(styles["btn"], styles["btn-facebook"])}
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </IconButton>
        <IconButton
          className={classNames(styles["btn"], styles["btn-twitter"])}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
        <IconButton
          className={classNames(styles["btn"], styles["btn-pinterest"])}
        >
          <FontAwesomeIcon icon={faPinterest} />
        </IconButton>
      </Box>
      {closeButton}
    </Box>
  );
};

export default Share;
