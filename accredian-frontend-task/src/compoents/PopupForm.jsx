import React, { useState, useCallback } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopupForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referralName: "",
    referralEmail: "",
    courseTitle: "",
    courseLink: "",
    description: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/api/referrals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          toast.success("Email send successfully!")
          setFormData({
            referrerName: "",
            referrerEmail: "",
            referralName: "",
            referralEmail: "",
            courseTitle: "",
            courseLink: "",
            description: "",
          });
          handleClose();
        } else {
          toast.error("Error at sending email");
        }
      } catch (error) {
        console.error("Submission Error:", error);
        toast.error("Something went wrong!");
      }
    },
    [formData, handleClose]
  );
  

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Typography variant="h6" gutterBottom className="">
            Referrer Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                name="referrerName"
                label="Your Full Name"
                type="text"
                fullWidth
                required
                value={formData.referrerName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                name="courseTitle"
                label="Course Title"
                type="text"
                fullWidth
                required
                value={formData.courseTitle}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                margin="dense"
                name="referrerEmail"
                label="Your Email Address"
                type="email"
                fullWidth
                required
                value={formData.referrerEmail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                name="courseLink"
                label="Course Link"
                type="url"
                fullWidth
                required
                value={formData.courseLink}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Referral Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                name="referralName"
                label="Referral Full Name"
                type="text"
                fullWidth
                required
                value={formData.referralName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                name="referralEmail"
                label="Referral Email Address"
                type="email"
                fullWidth
                required
                value={formData.referralEmail}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <TextField
            margin="dense"
            name="description"
            label="Description (Optional)"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={formData.description}
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PopupForm;
