import React from 'react';
import s from "./Remote.module.css";
import {Button} from "@mui/material";

export const RemoteWork = () => {
  return (

      <div className={s.remoteWorkContainer}>
        <div className={s.remoteWorkContent}>
          <h2 className={s.aboutTitle}> Considering remote work options</h2>
          <Button
            target={"_blank"}
            variant="outlined"
            href="https://google.com"
            color={"error"}
            size={"large"}
            sx={{borderRadius: 28, marginTop: 2}}
          >
            Contact with me
          </Button>
        </div>

      </div>

  );
};

export default RemoteWork;