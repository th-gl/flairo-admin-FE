// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import TableRow from "@mui/material/TableRow";
// import TableCell from "@mui/material/TableCell";
// import Checkbox from "@mui/material/Checkbox";
// import Chip from "@mui/material/Chip";
// import Rating from "@mui/material/Rating";
// import Edit from "@mui/icons-material/Edit";
// import DeleteOutline from "@mui/icons-material/DeleteOutline";
// import ContentCopy from "@mui/icons-material/ContentCopy";
// import PlayArrow from "@mui/icons-material/PlayArrow";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import Star from "@mui/icons-material/Star";
// import FlexBox from "@/components/flexbox/FlexBox";
// import { Paragraph } from "@/components/typography";
// import { TableMoreMenuItem, TableMoreMenu } from "@/components/table";
// import { useTranslation } from "react-i18next";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import TextField from "@mui/material/TextField";
// import { TextField as Textarea } from "@mui/material"; 
// import TextareaAutosize from "@mui/material/TextareaAutosize";

// import {
//   PROMPT_STATUS,
//   PROMPT_CATEGORIES,
//   AI_MODELS_FOR_PROMPTS,
//   PROMPT_COMPLEXITY,
// } from "@/__fakeData__/aiPrompts";
// import { alpha } from "@mui/material/styles";
// import { doc, updateDoc, deleteField,deleteDoc } from "firebase/firestore";
// import { DB } from "@/contexts/firebaseContext.jsx";
// import { toast } from "react-toastify";
// import {
//   Grid,
//   IconButton,
//   Tooltip
// } from "@mui/material";


// const getStatusColor = (status) => {
//   switch (status) {
//     case PROMPT_STATUS.ACTIVE:
//       return { color: "success", textColor: "#2e7d32" };
//     case PROMPT_STATUS.DRAFT:
//       return { color: "warning", textColor: "#ed6c02" };
//     case PROMPT_STATUS.TESTING:
//       return { color: "info", textColor: "#0288d1" };
//     case PROMPT_STATUS.ARCHIVED:
//       return { color: "default", textColor: "#666" };
//     case PROMPT_STATUS.DEPRECATED:
//       return { color: "error", textColor: "#d32f2f" };
//     default:
//       return { color: "default", textColor: "#666" };
//   }
// };

// const getCategoryColor = (category) => {
//   const colors = {
//     [PROMPT_CATEGORIES.CONTENT_GENERATION]: "#1976d2",
//     [PROMPT_CATEGORIES.CUSTOMER_SUPPORT]: "#2e7d32",
//     [PROMPT_CATEGORIES.DATA_ANALYSIS]: "#ed6c02",
//     [PROMPT_CATEGORIES.CODE_GENERATION]: "#9c27b0",
//     [PROMPT_CATEGORIES.TRANSLATION]: "#d32f2f",
//     [PROMPT_CATEGORIES.SUMMARIZATION]: "#0288d1",
//     [PROMPT_CATEGORIES.CLASSIFICATION]: "#795548",
//     [PROMPT_CATEGORIES.CREATIVE_WRITING]: "#e91e63",
//     [PROMPT_CATEGORIES.PRODUCT_DESCRIPTION]: "#ff9800",
//     [PROMPT_CATEGORIES.EMAIL_GENERATION]: "#607d8b",
//   };
//   return colors[category] || "#666";
// };

// export default function ServiceTableRow(props) {
//   console.log("props", props);

//   const { t } = useTranslation();
//   const { user, prompt, isSelected, handleSelectRow, handleDeleteService,fetchAISetting,handleEdit,
//     setOpenAddDialo
//    } =
//     props;
//   console.log("userrr", user);
//   const navigate = useNavigate();
//   const [openMenuEl, setOpenMenuEl] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDetailDialog, setOpenDetailDialog] = useState(false);
//   const [openEditDialog, setOpenEditDialog] = useState(false);
//   const [openTestDialog, setOpenTestDialog] = useState(false);


//   const handleOpenMenu = (event) => {
//     setOpenMenuEl(event.currentTarget);
//   };


//   const handleCloseOpenMenu = () => setOpenMenuEl(null);

//   // Delete confirmation
//   const handleDeleteConfirmation = () => {
//     setOpenDialog(true);
//     handleCloseOpenMenu();
//   };

//     const handleDeleteConfirm = async (userId) => {
//       console.log("userId", userId);
  
//       try {
//         const userRef = doc(DB, "aiPrompts", userId); // 'react' is the collection name
//         await deleteDoc(userRef);
//         toast.success(t("Prompt deleted successfully"));
//        setOpenDialog(false);
//         await fetchAISetting();
//       } catch (error) {
//         console.error("Error deleting user: ", error);
//         throw error;
//       }
//     };

//   const handleDeleteCancel = () => {
//     setOpenDialog(false);
//   };

//   // View details
//   const handleViewDetails = () => {
//     console.log('AI prompt')
//     fetchAISetting();
//     setOpenDetailDialog(true);
//     handleCloseOpenMenu();
//   };

//   const handleDetailDialogClose = () => {
//     setOpenDetailDialog(false);
//   };

//   // Edit prompt
//   const handleEditPrompt = () => {
//     setOpenAddDialog(true);
//     handleCloseOpenMenu();
//   };

//   const handleEditDialogClose = () => {
//     setOpenEditDialog(false);
//   };

//   // Test prompt
//   const handleTestPrompt = () => {
//     setOpenTestDialog(true);
//     handleCloseOpenMenu();
//   };

//   const handleTestDialogClose = () => {
//     setOpenTestDialog(false);
//   };

//   // Duplicate prompt
//   const handleDuplicatePrompt = () => {
//     // Implementation for duplicating prompt
//     handleCloseOpenMenu();
//   };

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
//   };

//   const truncateText = (text, maxLength = 50) => {
//     if (!text) return "-";
//     return text.length > maxLength
//       ? `${text.substring(0, maxLength)}...`
//       : text;
//   };

//   const statusStyle = getStatusColor(prompt?.status);
//   const categoryColor = getCategoryColor(prompt?.category);

//   return (
//     <>
//       <TableRow
//         hover
//         selected={isSelected}
      
//       >
//         {/* <TableCell padding="checkbox">
//           <Checkbox
//             size="small"
//             color="primary"
//             checked={isSelected}
//             onClick={(event) => handleSelectRow(event, prompt.id)}
//             sx={{
//               "&.Mui-checked": {
//                 color: "primary.main",
//               },
//               "&:hover": {
//                 backgroundColor: (theme) =>
//                   alpha(theme.palette.primary.main, 0.1),
//               },
//             }}
//           />
//         </TableCell> */}

//         {/* Prompt Name */}
//         <TableCell padding="normal">
//           <FlexBox alignItems="center" gap={2}>
//             <div>
//               <Paragraph fontWeight={500} color="text.primary">
//                 {user?.apiKey  || "-"}
//               </Paragraph>
//             </div>
//           </FlexBox>
        
//         </TableCell>
//           <TableCell padding="normal">
    
//             <div>
//               <Paragraph fontWeight={500} color="text.primary">
               
//                  {user?.revenuecat_api_key_android || "-"}
//               </Paragraph>
//             </div>
        
        
//         </TableCell>
//             <TableCell padding="normal">
    
//             <div>
//               <Paragraph fontWeight={500} color="text.primary">
               
//                  {user?.revenuecat_api_key_ios || "-"}
//               </Paragraph>
//             </div>
        
        
//         </TableCell>
//            <TableCell padding="normal">
    
//             <div>
//               <Paragraph fontWeight={500} color="text.primary">
               
//                  {user?.prompt || "-"}
//               </Paragraph>
//             </div>
        
        
//         </TableCell>
//            {/* <TableCell padding="normal">
    
//             <div>
//               <Paragraph fontWeight={500} color="text.primary">
//                 {user?.prompt || "-"}
//               </Paragraph>
//             </div>
        
        
//         </TableCell> */}
     

       

//         {/* Actions */}
//         <TableCell padding="normal">
//           <TableMoreMenu
//             open={openMenuEl}
//             handleOpen={handleOpenMenu}
//             handleClose={handleCloseOpenMenu}
//           >
//             <TableMoreMenuItem
//               Icon={VisibilityIcon}
//               title={t("View Details")}
//               handleClick={handleViewDetails}
//             />
//             <TableMoreMenuItem
//               Icon={Edit}
//               title={t("Edit Prompt")}
//              handleClick={() => handleEdit(user)} 
//             />
          
//             <TableMoreMenuItem
//               Icon={DeleteOutline}
//               title={t("Delete")}
//               handleClick={handleDeleteConfirmation}
//             />
//           </TableMoreMenu>
//         </TableCell>
//       </TableRow>

//       {/* Delete Confirmation Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleDeleteCancel}
//         aria-labelledby="delete-dialog-title"
//       >
//         <DialogTitle id="delete-dialog-title">
//           {t("Confirm Delete")}
//         </DialogTitle>
//         <DialogContent>
//           <Paragraph>
//             {t("Are you sure you want to delete")} "{prompt?.name}"?
//             {t("This action cannot be undone.")}
//           </Paragraph>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDeleteCancel} color="inherit">
//             {t("Cancel")}
//           </Button>
//           <Button
//             onClick={()=>handleDeleteConfirm(user.id)}
//             color="error"
//             variant="contained"
//           >
//             {t("Delete")}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog
//         open={openDetailDialog}
//         onClose={handleDetailDialogClose}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>{t("Prompt Details")}</DialogTitle>
//         <DialogContent>
//           <Box sx={{ pt: 2 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label={t("Prompt Key")}
//                   margin="normal"
//                   value={user?.key || "-"}
//                   InputProps={{
//                     readOnly: true,
//                     endAdornment: (
//                       <Tooltip title={t("Copy to clipboard")}>
//                         <IconButton
//                           onClick={() => copyToClipboard(user?.key)}
//                           edge="end"
//                         >
                      
//                         </IconButton>
//                       </Tooltip>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label={t("Revenuecat API Key")}
//                   margin="normal"
//                   value={user?.revenuecat_api_key || "-"}
//                   InputProps={{
//                     readOnly: true,
//                     endAdornment: (
//                       <Tooltip title={t("Copy to clipboard")}>
//                         <IconButton
                    
//                           edge="end"
//                         >
                       
//                         </IconButton>
//                       </Tooltip>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
            
//             <TextField
//               fullWidth
//               label={t("Prompt Name")}
//               margin="normal"
//               value={user?.name || "-"}
//               InputProps={{
//                 readOnly: true,
//                 endAdornment: (
//                   <Tooltip title={t("Copy to clipboard")}>
//                     <IconButton
//                       onClick={() => copyToClipboard(user?.name)}
//                       edge="end"
//                     >
                     
//                     </IconButton>
//                   </Tooltip>
//                 ),
//               }}
//             />

//             <Textarea
//               fullWidth
//               label={t("Prompt Content")}
//               margin="normal"
//               multiline
//               value={user?.prompt || "-"}
//               InputProps={{
//                 readOnly: true,
//                 endAdornment: (
//                   <Tooltip title={t("Copy to clipboard")}>
//                     <IconButton
//                       onClick={() => copyToClipboard(user?.prompt)}
//                       edge="end"
//                     >
                   
//                     </IconButton>
//                   </Tooltip>
//                 ),
//               }}
//               rows={8}
//               sx={{ fontFamily: "monospace" }}
//             />

//             {/* <TextField
//               fullWidth
//               label={t("Created At")}
//               margin="normal"
//               value={formatTimestamp(user?.createdAt)}
//               InputProps={{
//                 readOnly: true,
//               }}
//             /> */}

//             <TextField
//               fullWidth
//               label={t("Last Updated")}
//               margin="normal"
//               value={formatTimestamp(user?.updatedAt)}
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDetailDialogClose} color="primary">
//             {t("Close")}
//           </Button>
//         </DialogActions>
//       </Dialog>

//     </>
//   );
// }



import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Card,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from "@mui/material";
import {
  ContentCopy,
  Edit,
  DeleteOutline,
  Add
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { DB } from "@/contexts/firebaseContext";


const ServiceTableRow = ({ settings, onEdit, onDelete }) => {
  const { t } = useTranslation();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const copyToClipboard = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast.success(t("Copied to clipboard"));
  };

  const handleDelete = () => {
    onDelete();
    setConfirmDelete(false);
  };

  return (
   <Card sx={{ mb: 3, overflow: "visible", boxShadow: 3 }}>
      {/* Header */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: (theme) => theme.palette.primary.light,
          color: (theme) => theme.palette.primary.contrastText,
          flexWrap: "wrap",
          rowGap: 1,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {t("AI Configuration Settings")}
        </Typography>

        <Tooltip title={t("Edit Settings")}>
          <IconButton onClick={onEdit} sx={{ color: "inherit" }}>
            <Edit />
          </IconButton>
        </Tooltip>
      </Box>

      {/* API Keys Section */}
      <Box sx={{ p: 3, borderBottom: "1px solid", borderColor: "divider" }}>
        <Typography variant="subtitle1" fontWeight={600} mb={2}>
          {t("API Keys")}
        </Typography>
        <Grid container spacing={2}>
          {/* Main API Key */}
          <Grid item xs={12}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={1}
              >
                {t("Main API Key")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    fontFamily: "monospace",
                    wordBreak: "break-word",
                    whiteSpace: "pre-wrap",
                    fontSize: "0.875rem",
                    flex: 1,
                  }}
                >
                  {settings?.apiKey || "-"}
                </Box>
                <IconButton
                  size="small"
                  onClick={() => copyToClipboard(settings?.apiKey)}
                  color="primary"
                  sx={{ mt: { xs: 1, sm: 0 } }}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* Android RevenueCat Key */}
          <Grid item xs={12} md={6}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={1}
              >
                {t("Android RevenueCat Key")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    fontFamily: "monospace",
                    wordBreak: "break-word",
                    whiteSpace: "pre-wrap",
                    fontSize: "0.875rem",
                    flex: 1,
                  }}
                >
                  {settings?.revenuecat_api_key_android || "-"}
                </Box>
                <IconButton
                  size="small"
                  onClick={() => copyToClipboard(settings?.revenuecat_api_key_android)}
                  color="primary"
                  sx={{ mt: { xs: 1, sm: 0 } }}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* iOS RevenueCat Key */}
          <Grid item xs={12} md={6}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={1}
              >
                {t("iOS RevenueCat Key")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    fontFamily: "monospace",
                    wordBreak: "break-word",
                    whiteSpace: "pre-wrap",
                    fontSize: "0.875rem",
                    flex: 1,
                  }}
                >
                  {settings?.revenuecat_api_key_ios || "-"}
                </Box>
                <IconButton
                  size="small"
                  onClick={() => copyToClipboard(settings?.revenuecat_api_key_ios)}
                  color="primary"
                  sx={{ mt: { xs: 1, sm: 0 } }}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Prompt Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="subtitle1" fontWeight={600} mb={2}>
          {t("System Prompt")}
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            backgroundColor: (theme) => theme.palette.grey[50],
            borderRadius: 1,
          }}
        >
          {settings?.prompt ? (
            <>
              <Box
                sx={{
                  maxHeight: "400px",
                  overflow: "auto",
                  p: 1,
                  backgroundColor: "white",
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  mb: 2,
                }}
              >
                <Typography
                  whiteSpace="pre-wrap"
                  fontFamily="monospace"
                  fontSize="0.875rem"
                >
                  {settings.prompt}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  startIcon={<ContentCopy />}
                  onClick={() => copyToClipboard(settings.prompt)}
                >
                  {t("Copy Prompt")}
                </Button>
              </Box>
            </>
          ) : (
            <Typography color="text.secondary" fontStyle="italic">
              {t("No prompt configured")}
            </Typography>
          )}
        </Paper>
      </Box>
    </Card>
  );
};

export default ServiceTableRow