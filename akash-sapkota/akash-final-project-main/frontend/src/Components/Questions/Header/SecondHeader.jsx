import React from 'react';
import './header.css';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    background: '#0077CC',
    color: 'White',
    '&:hover': {
      backgroundColor: '#2D6FF7',
      color: '#white',
    },
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '12px',
    colorAdjust: 'economy',
    fontFamily: 'Roboto',

  },
  modal: {
    color: '#0077CC',
    fontFamily: 'Roboto',
    fontSize: '16px',
  },

}));

function Header() {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));
  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog
          id="alert"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              className={classes.modal}

            >
              You Must LogIn To Add A question
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              id="close-alert"
              color="primary"
              autoFocus
            >
              ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <header>
        <div className="answer-types">
          <Link
            to="/"
          >
            All Questions
          </Link>
          {!userLocalStorage?.user
            ? (
              <Button
                to="/"
                onClick={handleClickOpen}
                className={classes.button}
                id="add-question"
              >
                Add Question +
              </Button>
            )
            : (
              <Button
                onClick={() => history.push('/add-question')}
                className={classes.button}
                id="add-question"
              >
                Add Question +

              </Button>
            )}

        </div>

      </header>
    </>

  );
}
function mapStateToProps(state) {
  return {
    user: state.userReducer.user,

  };
}
export default connect(mapStateToProps)(Header);
