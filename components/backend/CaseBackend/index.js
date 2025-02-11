import { Button, Divider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useDialogContext from 'hooks/useDialogContext';
import CaseRoleAssignDialog from './CaseRoleAssignDialog';
import CaseStageChangeDialog from './CaseStageChangeDialog';

/**
 * A component with rule backend.
 */
export default function CaseBackend({ sx }) {
  const { showDialog, closeDialog } = useDialogContext();

  return (
    <Box sx={{ ...sx }}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Backend for Cases
        </Typography>
        <Typography gutterBottom>
          A place where users with the appropriate roles can manage cases.
        </Typography>
        <Divider />
      </Box>
      <Box sx={{ mt: 2.5 }}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() =>
              showDialog(<CaseRoleAssignDialog onClose={closeDialog} />)
            }
          >
            Assign Role
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              showDialog(<CaseStageChangeDialog onClose={closeDialog} />)
            }
          >
            Change Stage
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
