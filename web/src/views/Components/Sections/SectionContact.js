import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Snackbar from '../../../components/Snackbar/Snackbar.js';
import SectionMaps from '../Sections/SectionMaps.js'

const styles = (theme) => ({
  root: {
    marginBottom: 0,
    display: 'flex',
  },

  gridContainer:{
    marginTop: "80px",
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    padding: theme.spacing(8, 3),

  },
  cardContent: {
    maxWidth: 400,
    
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function Contact(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
          <SectionMaps/>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            
          </div>
        </Grid>
        
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
