/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Faqs.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '70%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Faqs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="faqs_wrapper" className={classes.root}>
      <h3 className="faqs-title">FAQ'S</h3>
      <p className="faqs-txt">
        Todos os produtos são 100% saudáveis: sem glúten, sem lactose, são quase todos veganos.
        <br />
        {' '}
        Na minha cozinha não entra farinha de trigo, nem manteiga, nem açúcar refinado.
      </p>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Quais são os tipo de farinhas utilizados?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faqs-inner-txt">
            São utilizadas farinhas de trigo sarraceno, de amêndoa, coco, arroz e aveia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Quais são os tipos de adoçantes utilizados?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faqs-inner-txt">
            Para adoçar, são utilizados adoçantes naturais como tâmaras, geleia de arroz, açúcar de coco ou açúcar mascavado.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Os produtos são aptos para celíacos?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faqs-inner-txt">
            Todos os ingredientes utilizados são certificados sem glúten, contudo existe perigo por contaminação devido à manipulação de glúten nas mesmas instalações.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
