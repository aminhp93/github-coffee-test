import Button from "@mui/material/Button";
import { NotificationProvider, useSnackbar } from "@/components/notification";

const NotificationTemplate = () => {
  return (
    <NotificationProvider>
      <NotificationConsumer />
    </NotificationProvider>
  );
};

const NotificationConsumer = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Button
      variant="outlined"
      onClick={() =>
        enqueueSnackbar({ message: "Notification!", variant: "default" })
      }
    >
      {`Click me!`}
    </Button>
  );
};

export default NotificationTemplate;
