import { Avatar, Box, Popper, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import Drawers from "../../assets/drawers.jpg";
import MichelleAvatar from "../../assets/avatar-michelle.jpg";
import classNames from "classnames";
import Share from "../ShareComponent/Share";
import ShareButton from "../ShareButton/ShareButton";
import { useEffect, useRef, useState } from "react";

const ArticlePreview = () => {
  const [shareButtonActive, setShareButtonActive] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const btnRef = useRef<any>();

  const isSmall = useMediaQuery("(max-width : 768px)");

  const switchShareButtonActive = () => setShareButtonActive((prev) => !prev);

  useEffect(() => {
    if (btnRef.current) {
      setAnchorEl(btnRef.current);
    }
    if (isSmall) {
      setAnchorEl(null);
    }
  }, [btnRef, isSmall]);

  return (
    <Box
      className={classNames(styles["wrapper"], {
        [styles["huge-padding"]]: shareButtonActive && !isSmall,
      })}
    >
      <Box className={styles["container"]}>
        <img className={styles["img-drawers"]} src={Drawers} />
        <Box className={styles["content"]}>
          <Typography className={styles["title"]} variant="h1">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </Typography>
          <Typography className={styles["text"]}>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </Typography>
          {(!shareButtonActive || !isSmall) && (
            <Box className={styles["user-detail"]}>
              <Avatar src={MichelleAvatar} />
              <Typography className={styles["name"]} variant="h2">
                Michelle Appleton
                <span className={styles["date"]}>28 Jun 2020</span>
              </Typography>
              <ShareButton reff={btnRef} onClick={switchShareButtonActive} />
            </Box>
          )}
        </Box>
        {isSmall && shareButtonActive && (
          <Share
            closeButton={
              <ShareButton active onClick={switchShareButtonActive} />
            }
          />
        )}
        {btnRef?.current && !isSmall && (
          <Popper
            className={styles["popper"]}
            placement="top"
            open={shareButtonActive}
            anchorEl={anchorEl}
          >
            <Share compact />
          </Popper>
        )}
      </Box>
    </Box>
  );
};

export default ArticlePreview;
