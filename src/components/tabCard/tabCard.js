// import React from 'react'
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import './tabCard.css'


// const TabCard = ({ title, img }) => {
//   return (
//     <Card style={{ display: 'flex' }} >
//       <div className={'Main-card'}>
//         {title}
//       </div>
//     </Card>
//   )
// }

// export default TabCard

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import taskSvg from './task-list-svg.svg'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20vh',
    width: '90vw'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function TabCard() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Tasks
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={taskSvg}
        title="tasks"
      />
    </Card>
  );
}