import styled from "styled-components";
import Snackbar from '@material-ui/core/Snackbar';


export const SnackbarWrapper = styled.div`
    z-index: 9;
`

export const CustomSnackbar = styled(Snackbar)`
    width: 80px;
    margin: 0 auto;
    position: relative;
`