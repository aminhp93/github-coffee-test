// HeaderLayout.stories.tsx
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { log } from "@/utils/logger";

import { AddCircleOutlined, Downloading } from "@mui/icons-material";
import { HeaderLayout, HeaderLayoutProvider } from "@/components/header-layout";

const DefaultHeaderLayoutTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <HeaderLayout
        infoList={[
          {
            value: "processViews",
            label: "processViews",
          },
          {
            value: "popups",
            label: "popups",
          },
          {
            value: "templates",
            label: "templates",
          },
        ]}
        onChangeInfoList={(value) => log(value)}
        actionListNodes={[
          <Button
            key="import"
            color="secondary"
            startIcon={<Downloading />}
            variant="text"
          >
            <Typography variant="inherit">{"import"}</Typography>
          </Button>,
          <Button
            key="addNew"
            startIcon={<AddCircleOutlined />}
            variant="contained"
            color="primary"
            className="add-new-button"
          >
            <Typography variant="inherit">{`${"addNew"}`}</Typography>
          </Button>,
        ]}
      />
    </HeaderLayoutProvider>
  );
};
export default DefaultHeaderLayoutTemplate;
