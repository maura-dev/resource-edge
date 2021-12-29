import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
  },
  appBar: {
    background: "#6EC177",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBarSpacer: {
    [theme.breakpoints.down("xs")]: {
      ...theme.mixins.toolbar,
    },
  },
  navigationLogo: {
    width: "50%",
    cursor: "pointer",
  },
  navigationLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(6),
  },
  navigationDrawer: {
    width: 240,
    border: "none",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative",
    height: "100vh",
  
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  navigationToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  navigationToolbarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },
  navigationList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  
  },
  navigationSpacer: {
    flex: 1,
  },
  menuItemIcon: {
    width: "100%",
  },
  menuItem: {
    width: "80%",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuItemActive: {
    backgroundColor: "#EBEBEC",
  },
  mainCont: {
    padding:"50px 30px",
    width:"50vw",
    height:"auto"
  },
  formSection: {
    border:"0.4px solid #C9C9C9",
    padding:"0px 20px"
  },
  input: {
    height:"57px",
    width:"100%",
    focus:{
      border:"1px solid #C4FF65",
    },
  },
  inputSection : {
    display:"flex",
    justifyContent:"space-between",
  },
  primaryBtn: {
    height:"57px",
    backgroundColor:"#C4FF65",
    textTransform:"capitalize",
    fontWeight: "500",
    fontSize: "20px",
    marginBottom:"20px"
  },
  secondaryGhostBtn: {
    height:"41px",
    backgroundColor:"#fafafa",
    textTransform:"capitalize",
    fontWeight: "500",
    fontSize: "16px",
    borderRadius:"4px",
    marginTop:"30px"
  },
  secondaryGreenBtn: {
    height:"41px",
    backgroundColor:"#C4FF65;",
    textTransform:"capitalize",
    fontWeight: "500",
    fontSize: "16px",
    borderRadius:"4px",
    marginTop:"30px"
  },
  inputField : {
    margin:"30px 0px",
    width:"100%",
  },
  inputLabel :{
    fontWeight: "500",
    fontSize: "18px",
    color: "#93D626",
  },
  mainTitle :{
    margin: "20px 0px",
    fontWeight: "500",
    fontSize: "32px",
  },
  aside :{
    padding:"50px 30px",
    width:"20vw",
    height:"auto"
  },
  iconBtn : {
    backgroundColor:"#f9f9f9",
    borderRadius:"3px",
  },
  avatarName : {
    fontSize:"16px",
    fontWeight:"500",
    color: "#0F0F0E",
    display:"block"
  },
  userName :{
    fontSize:"12px",
    color: "#80807E",
    display:"block"
  },
  wallet:{
    color:"#93D626",
    fontSize:"16px",
    fontWeight:"500",
    display:"block",
  },

  bal :{
    color:"#ffffff",
    fontSize:"31px",
    fontWeight:"500",
    display:"block",
  },
  walletBal: {
    backgroundColor:"#20201F",
    display:"block",
    margin:"auto",
    width:"90%",
    textAlign:"left",
    padding:"15px",
    borderRadius:"11px",
    boxShadow:"0px 22px 26px -11px rgba(94, 94, 94, 0.25)",
    marginTop:"30px"

  },
  paymentCount: {
    backgroundColor:"#C4FF65",
    boxShadow:"0px 12px 27px -7px rgba(196, 255, 101, 0.24)",
    color:"#0f0f0e",
    fontSize:"20px",
    fontWeight:"500"
  },
  dateStamp: {
    height:"37px",
    backgroundColor: "#FAFAFA",
    border: "0.4px solid #C9C9C9",
    padding:"0px 10px",
    marginTop:"10px"
  },
  searchBar: {
    margin:"20px 0px",
    height:"47px",
    backgroundColor:"#f9f9f9",
    borderRadius:"5px",
    border:"1px solid #f9f9f9",
    width:"50%"
  },
  iconStyle: {
    marginTop:"10px"
    
  },
  paymentDeets: {
    padding:"50px 30px",
    width:"20vw",
    height:"auto",
    border: "0.4px solid #C9C9C9",
    marginTop:"20px",
    borderRadius:"4px",
  }, 
  paymentValues: {
    textAlign:"right",
  },
  deleteBtn: {
    height:"45px",
    backgroundColor:"#ffffff",
    textTransform:"capitalize",
    fontWeight: "500",
    fontSize: "16px",
    border:"1px solid red",
    color:"red",
    marginTop:"140px",
    borderRadius:"4px",
  }

  



  
}));