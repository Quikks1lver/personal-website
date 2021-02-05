import { ReactComponent } from "*.svg";
import { send } from "emailjs-com";

import React from "react";

// React notifications
import addNotification from "react-push-notification";
import { Options } from "react-push-notification/dist/notifications/Storage";

const sendNotification = () => {
  const options: Options = {
    title: "hi",
  };
  addNotification(options);
};

export default sendNotification;
