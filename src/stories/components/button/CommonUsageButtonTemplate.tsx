import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { Save, AddCircleOutlined } from "@mui/icons-material";

const ButtonTemplate = () => {
  return (
    <Box>
      <Box>
        <h3>{`Used`}</h3>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              startIcon={<AddCircleOutlined />}
              variant="contained"
              color="primary"
              className="add-new-button"
            >
              <Typography variant="inherit">{`Add new`}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <h3>{`Save Dialog`}</h3>
        <Grid container spacing={2}>
          <Grid item>
            <Button color="secondary">{`Cancel`}</Button>
          </Grid>

          <Grid item>
            <LoadingButton
              loading={false}
              loadingPosition="start"
              startIcon={<Save />}
            >
              <span>{`Save`}</span>
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <h3>{`Delete Dialog`}</h3>
        <Grid container spacing={2}>
          <Grid item>
            <Button color="secondary">{`Cancel`}</Button>
          </Grid>

          <Grid item>
            <LoadingButton
              color="error"
              loading={false}
              loadingPosition="start"
              startIcon={<Save />}
            >
              <span>{`Delete`}</span>
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ButtonTemplate;
