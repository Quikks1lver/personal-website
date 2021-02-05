// React notifications
import addNotification from "react-push-notification";
import {
  Color,
  Options,
} from "react-push-notification/dist/notifications/Storage";

/**
 * Sends a notification via react push notifications
 * @param title splash heading
 * @param subtitle shorter heading
 * @param message blurb
 * @param duration in milliseconds
 */
const sendNotification = (
  title: string,
  subtitle: string,
  message: string,
  duration: number
) => {
  const options: Options = {
    title: title,
    subtitle: subtitle,
    message: message,
    duration: duration,
    theme: "darkblue",
  };
  addNotification(options);
};

export default sendNotification;
