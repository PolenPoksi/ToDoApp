import { Box } from "@mui/system";

function CenterBox({ children }) {
  return (
    <Box
      sx={{
        borderRadius: '25px',
    
        minHeight: '90vh',
        height: 'fit-content',
        backgroundColor: '#262338',


      }}>
      {children}

    </Box>
  );
}
export default CenterBox;