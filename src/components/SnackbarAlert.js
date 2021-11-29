import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function SnackbarAlert({ open, setOpen, errorMessage }) {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert severity="error">{ errorMessage }</Alert>
        </Snackbar>
    );
}

export default SnackbarAlert;
