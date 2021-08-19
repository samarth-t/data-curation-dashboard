import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import DisplayPane from './DisplayPane';
import InfoPane from './InfoPane';
import data from './extractionData';


import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Button, TextField } from '@material-ui/core';

import axios from 'axios';

const drawerWidth = 40;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}%)`,
    marginLeft: `calc(${drawerWidth}%)`,
  },
  drawer: {
    width: `calc(${drawerWidth}%)`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `calc(${drawerWidth}%)`,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  const { name } = useParams()

  const [rawHTML, setRawHTML] = useState("")
  const [xpath, setXpath] = useState("")
  const [frameURL, setFrameURL] = useState("");
  const [extractions, setExtractions] = useState(data);

  // const [highlightXPATH, setHighlightFunc] = useState(() => () => ""); //default value a function that calls a function


  const updatePanes = (url) => {
      console.log('clicked')

      var config = {
          method: 'post',
          url: 'http://localhost/entity_db/get_page.php?url='+url,
          headers: {
              'Content-Type': 'application/json'
          },
      };

      axios(config)
          .then(function (response) {
              console.log(JSON.stringify(response.data));
              setRawHTML(response.data)
          })
          .catch(function (error) {
              console.log(error);
          });
  }

  const handleClick = item => {
      updatePanes(item.url);
      setFrameURL(item.url);
      setXpath(item.xpath);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Source: {frameURL}
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >


        <Button component={Link} to="/" color="primary">
        Back
        </Button>

        <Divider />
        <InfoPane name={name} handleClick={handleClick}/>

      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
            <DisplayPane frameURL={frameURL} rawHTML={rawHTML} xpath={xpath}/>
      </main>
    </div>
  );
}

// export default function Home() {

//     return (
//         <div style={{ marginTop: '', justify: 'left', height: '100vh' }}>
//             <center>
//                 <div>
//                     <TextField style={{ width: '85%' }} id="standard-basic" shrink={false} value={textURL} onChange={(e) => { setTextURL(e.target.value) }} />
//                     <Button variant="contained" onClick={() => { updatePanes(textURL); }}>Go</Button>
//                 </div>
//             </center>

//             <SplitPane split="vertical" minSize={200} defaultSize={1200} maxSize={400} pane2Style={{ overflowY: 'auto' }}>
//                 <div>
                    
//                 </div>

//                 <div>
                    
//                 </div>
//             </SplitPane>

//         </div>

//     )

// }