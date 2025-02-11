import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ProfileList from 'components/profile/ProfileList';
import { JURISDICTION_ROLE } from 'constants/contracts';
import useJurisdiction from 'hooks/useJurisdiction';
import useProfile from 'hooks/useProfile';
import useToasts from 'hooks/useToasts';
import { useEffect, useState } from 'react';

/**
 * A component with jurisdiction officials (judges, admins).
 */
export default function JurisdictionOfficials({ jurisdiction }) {
  const { showToastError } = useToasts();
  const { getJurisdictionRoleAccounts } = useJurisdiction();
  const { getProfiles } = useProfile();
  const [judgeProfiles, setJudgeProfiles] = useState(null);
  const [adminProfiles, setAdminProfiles] = useState(null);

  async function loadData() {
    try {
      const judgeAccounts = getJurisdictionRoleAccounts(
        jurisdiction,
        JURISDICTION_ROLE.judge.id,
      );
      const adminAccounts = getJurisdictionRoleAccounts(
        jurisdiction,
        JURISDICTION_ROLE.admin.id,
      );
      setJudgeProfiles(await getProfiles(judgeAccounts, null, 25, 0));
      setAdminProfiles(await getProfiles(adminAccounts, null, 25, 0));
    } catch (error) {
      showToastError(error);
    }
  }

  useEffect(() => {
    if (jurisdiction) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jurisdiction]);

  return (
    <>
      <Box>
        <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
          Judges
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <ProfileList profiles={judgeProfiles} />
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
          Admins
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <ProfileList profiles={adminProfiles} />
      </Box>
    </>
  );
}
