import Box from "@mui/material/Box";
import { styled } from "@/theme";
import { useTranslation } from "@/utils/translation";
import { StyledComponent } from "@emotion/styled";
import type { BoxProps } from "@mui/material/Box";

const EmptyDataRow = () => {
  const { t } = useTranslation();

  return (
    <StyledBoxEmptyViewContainer>
      {t("emptyDataRow")}
    </StyledBoxEmptyViewContainer>
  );
};

export { EmptyDataRow };

export const StyledBoxEmptyViewContainer: StyledComponent<BoxProps> = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  textAlign: "center",
  alignContent: "center",
}));
