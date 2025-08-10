import { DeleteOutline } from "@mui/icons-material"
import { AddRounded } from "@mui/icons-material"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';

import TextField from '@mui/material/TextField';
import { useState,useEffect } from "react";
import './tes.css'
import { Link ,Routes,Route } from "react-router";
import Rot from "./Rot";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react'
let i=4;
export default function Test(){
    function handeladd(){
    //   const up=[...alllist,{title:title,id:i}];
      setall([...alllist,{title:title,id:i}])
      setstl([...stllist,{title:title,id:i}])
      i++;settit("");
    //   localStorage.setItem('todos',JSON.stringify(up));
    }
    const [editid,seteditid]=useState("");
    const [delid,setdelid]=useState("");
    const [title,settit]=useState("");
    const [donlist,setdon]=useState([]);
    const [alllist,setall]=useState([
    


    ])
    // useEffect(()=>{
    // const all=JSON.parse(localStorage.getItem('todos'))
    // setall(all)
    // },[])
    const [edit,setedit]=useState({title:"",id:"",body:"",iscomp:false})
    const[open,setop]=useState(false);
    const[openedit,setopenedit]=useState(false)
    const [stllist,setstl]=useState(alllist);
    //All list
    const lis=alllist.map((l)=>{
        return(
    <div className="card"style={{display:"flex",flexDirection:"row",width:"96%",marginTop:"10px",backgroundColor:"#0d47a1",borderRadius:"3px",boxShadow:"2px 2px 2px black",height:"60%"}}>
    <div key={l.id}style={{display:"flex",flexDirection:"column",width:"70%",color:"white"}}><h1 style={{padding:"2px",margin:"2px",fontSize:"25px"}}>{l.title}</h1><h2 style={{padding:"2px",margin:"2px",fontSize:"20px"}}>{l.body}</h2></div>
    <div style={{width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button title="Done" className="butt" onClick={()=>{handeldones(l)}} disabled={l.iscomp}
      style={{color:l.iscomp?"gray":"white",borderRadius:"12px",border:"none",padding:"2px 0px 0px 0px",backgroundColor:"#00e676"}}><CheckCircleIcon style={{backgroundColor:"#00e676",color:l.iscomp?"gray":"white",borderRadius:"14px"}}/></button> 
      <button title="Edit" className="butt" onClick={()=>{handeledit(l.id)}}style={{backgroundColor:"#2196f3",color:"white",borderRadius:"20px",padding:"2px 0px 0px 0px",border:"none",marginLeft:"2px"}}> <EditIcon style={{backgroundColor:"#2196f3",color:"white",borderRadius:"12px",marginLeft:"2px"}}/></button>
      <button title="Delete" className="butt" onClick={()=>{handeldelall(l.id)}}style={{backgroundColor:"#e53935",color:"white",borderRadius:"20px",padding:"2px 0px 0px 0px",border:"none",marginLeft:"2px"}}><DeleteOutline style={{backgroundColor:"#e53935",color:"white",borderRadius:"12px",marginLeft:"2px"}}/></button>  
        </div>
    </div>
        )
    })
    //Done list 
     const li=donlist.map((l)=>{
        if(l.title){
        return(
    <div className="card"style={{display:"flex",flexDirection:"row",width:"96%",marginTop:"10px",backgroundColor:"#0d47a1",borderRadius:"3px",boxShadow:"2px 2px 2px black",height:"60%"}}>
    <div key={l.id}style={{display:"flex",flexDirection:"column",width:"70%",color:"white"}}><h1 style={{padding:"2px",margin:"2px",fontSize:"25px"}}>{l.title}</h1><h2 style={{padding:"2px",margin:"2px",fontSize:"20px"}}>{l.body}</h2></div>
    <div style={{width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button title="Done" className="butt" onClick={()=>{}}style={{color:"gray",borderRadius:"12px",border:"none",padding:"2px 0px 0px 0px",backgroundColor:"#00e676"}}><CheckCircleIcon style={{backgroundColor:"#00e676",color:"gray",borderRadius:"14px"}}/></button> 
      <button title="Edit" className="butt" onClick={()=>{handeledit(l.id)}}style={{backgroundColor:"#2196f3",color:"white",borderRadius:"20px",padding:"2px 0px 0px 0px",border:"none",marginLeft:"2px"}}> <EditIcon style={{backgroundColor:"#2196f3",color:"white",borderRadius:"12px",marginLeft:"2px"}}/></button>
      <button title="Delete" className="butt" onClick={()=>{handeldelall(l.id)}}style={{backgroundColor:"#e53935",color:"white",borderRadius:"20px",padding:"2px 0px 0px 0px",border:"none",marginLeft:"2px"}}><DeleteOutline style={{backgroundColor:"#e53935",color:"white",borderRadius:"12px",marginLeft:"2px"}}/></button>  
        </div>
    </div>
        )}
    })
   // Still list .
const st=stllist.map((l)=>{
        return(
    <div className="card"style={{display:"flex",flexDirection:"row",width:"96%",marginTop:"10px",backgroundColor:"#0d47a1",borderRadius:"3px",boxShadow:"2px 2px 2px black",height:"60%"}}>
    <div key={l.id}style={{display:"flex",flexDirection:"column",width:"70%",color:"white"}}><h1 style={{padding:"2px",margin:"2px",fontSize:"25px"}}>{l.title}</h1><h2 style={{padding:"2px",margin:"2px",fontSize:"20px"}}>{l.body}</h2></div>
    <div style={{width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button title="Done" className="butt" onClick={()=>{handeldones(l)}}style={{color:"white",borderRadius:"12px",border:"none",padding:"2px 0px 0px 0px",backgroundColor:"#00e676"}}><CheckCircleIcon style={{backgroundColor:"#00e676",color:"white",borderRadius:"14px"}}/></button> 
      <button title="Edit" className="butt" onClick={()=>{handeledit(l.id)}}style={{backgroundColor:"#2196f3",color:"white",borderRadius:"20px",padding:"2px 0px 0px 0px",border:"none",marginLeft:"2px"}}> <EditIcon style={{backgroundColor:"#2196f3",color:"white",borderRadius:"12px",marginLeft:"2px"}}/></button>
      <button title="Delete" className="butt" onClick={()=>{handeldelall(l.id)}}style={{backgroundColor:"#e53935",color:"white",borderRadius:"20px",padding:"2px 0px 0px 0px",border:"none",marginLeft:"2px"}}><DeleteOutline style={{backgroundColor:"#e53935",color:"white",borderRadius:"12px",marginLeft:"2px"}}/></button>  
        </div>
    </div>
        )})
    // input element .
    let inp=
    <div style={{display:"flex",flexDirection:"row",width:"96%",marginTop:"20px",height:"20%",marginBottom:"10px",alignSelf:"flex-end"}}>

    <input placeholder="Task Title" style={{width:"70%"}} value={title} onChange={(event)=>{settit(event.target.value)}} />
    <button variant="contained"  disabled={title.length<=0} style={title.length>0?{width:"30%",backgroundColor:"#01579b",color:"white",border:"none",borderRadius:"3px"}:{width:"30%",border:"none",borderRadius:"3px"}}
    onClick={()=>{handeladd()}}
    >Add</button>

    </div>
    
    return(
        <>
        <Dialog open={openedit}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <DialogContentText>
            Write the new title and the new body of the task .
          </DialogContentText>
          <form onSubmit={(event)=>{event.preventDefault()}} >
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="Title"
              label="The Title"
              type="text"
              fullWidth
              variant="standard"
              value={edit.title}
              onChange={(event)=>{setedit({...edit,title:event.target.value})}}
            />
            <TextField
            value={edit.body}
              autoFocus
              required
              margin="dense"
              id="name"
              name="Body"
              label="The body"
              type="text"
              fullWidth
              variant="standard"
              onChange={(event)=>{setedit({...edit,body:event.target.value})}}
            />
            <DialogActions>
              <Button onClick={()=>{setopenedit(false);setedit({title:"",id:"",body:"",iscomp:false})}}>Cancel</Button>
              <Button onClick={handelsubmit} type="submit">Agree</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you sure need to delete it ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure to delete this task ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handeldis}>Disagree</Button>
          <Button autoFocus onClick={handelag}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        <form onSubmit={(event)=>{event.preventDefault()}} style={{
            flexDirection:"column",backgroundColor:"white",width:"100vw",maxWidth:"600px",display:"flex",
            justifyContent:"flex-start",marginLeft:"0px",alignItems:"center"
            ,borderRadius:"10px",maxHeight:"80vh",overflow:"scroll"
            }}>
    <h1 style={{paddingBottom:"5px",marginBottom:"0px"}}>To-Do list</h1><hr/><Divider component="div"/> <Divider variant="fullWidth" style={{width:"100%",marginBottom:"5px"}} />
    <Rot/>
    <Routes>
        <Route path="/All" element={lis}/>
        <Route path="/Done" element={li}/>
        <Route path="/Still" element={st}/>
    </Routes>
   {/* input component */}
   {inp}   
  </form>
        </>
    )
    function handeldones(l){
        setdon([...donlist,l]); 
        setstl(stllist.filter((li)=>{return li.id!==l.id}))
        alllist.map((ll)=>{
            if(ll.id===l.id)
                ll.iscomp=true;
        })
    }
    function handeledit(id){
    setopenedit(true)
    seteditid(id)
    }
    function handeldelall(id){
setop(true)
setdelid(id);
}

    function handeldis(){
    setop(false)
    }
    function handelag(){
    setop(false)
    const up=alllist.filter((l)=>{return l.id !== delid });
    setall(up)
    setstl(stllist.filter((l)=>{return l.id !== delid}))
    setdon(donlist.filter((l)=>{return l.id !== delid }))
    localStorage.setItem('todos',JSON.stringify(up));
    }
    function handelsubmit(){
    setall(alllist.map((item) =>
    item.id === editid ?{...edit,id:editid,iscomp:item.iscomp} : item
  ));
  setstl(stllist.map((item) =>
    item.id === editid ?{...edit,id:editid,iscomp:item.iscomp} : item
  ));
  setdon(donlist.map((item) =>
    item.id === editid ?{...edit,id:editid,iscomp:item.iscomp} : item
  ));
  setopenedit(false)
  setedit({title:"",id:"",body:"",iscomp:false})
    }
}