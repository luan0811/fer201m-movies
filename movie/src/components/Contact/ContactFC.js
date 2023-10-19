import React from "react";
import "./Contact.scss";
import {
  // Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Container,
} from "@material-ui/core";
import { Switch, TextInput, Button } from "react-materialize";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { padding } from "@mui/system";
import { useState } from "react";
import { addContact } from "../features/Contacts";
import { useDispatch } from "react-redux";
import Contacts from "./Contacts";
import { v4 as uuidv4 } from "uuid";
// ALERT
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// __________
export default function ContactFC() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState("");

  const { theme } = useContext(ThemeContext);
  // FORMIK
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false,
    },
    onSubmit: (values) => {
      setOpen(true);
      dispatch(
        addContact({
          id: uuidv4(),
          name: formik.values.name,
          message: formik.values.message,
          email: formik.values.email,
          phone: formik.values.phone,
          program: formik.values.program,
          agree: formik.values.agree,
        })
      );
      formik.resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number().integer().typeError("Section"),
      message: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  // ALERT message
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      className="contact"
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        borderBottom: theme.borderBottomColor,
      }}
    >
      <Container maxWidth="md">
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: theme.borderBottomColor,
            color: theme.color, 
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: theme.color,
              fontWeight: "600",
            }}
          >
            CONTACT US
          </h1>
          <TextInput
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={(event) => {
              if (formik.handleChange) {
                formik.handleChange(event);
              }
              setName(event.target.value);
            }}
            sx={(theme) => ({
              color: theme.color,
            })}
          />
          {formik.errors.name && formik.touched.name && (
            <Typography
              variant="caption"
              color="red"
              sx={(theme) => ({
                color: theme.color,
              })}
            >
              {formik.errors.name}
            </Typography>
          )}
          <TextInput
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={(event) => {
              if (formik.handleChange) {
                formik.handleChange(event);
              }
              setEmail(event.target.value);
            }}
            sx={(theme) => ({
              color: theme.color,
            })}
          />
          {formik.errors.email && formik.touched.email && (
            <Typography
              variant="caption"
              color="red"
              sx={(theme) => ({
                color: theme.color,
              })}
            >
              {formik.errors.email}
            </Typography>
          )}
          <TextInput
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={(event) => {
              if (formik.handleChange) {
                formik.handleChange(event);
              }
              setPhone(event.target.value);
            }}
            sx={(theme) => ({
              color: theme.color,
            })}
          />
          {formik.errors.phone && formik.touched.phone && (
            <Typography
              variant="caption"
              color="red"
              sx={(theme) => ({
                color: theme.color,
              })}
            >
              {formik.errors.phone}
            </Typography>
          )}
          <FormControl
            sx={{
              m: 1,
              minWidth: 600,
              color: theme.color,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <InputLabel
              id="demo-simple-select-autowidth-label"
              sx={(theme) => ({
                color: theme.color,
              })}
              style={{ color: theme.color }}
              onChange={(event) => {
                if (formik.handleChange) {
                  formik.handleChange(event);
                }
                setProgram(event.target.value);
              }}
            >
              Program of Study
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              label="Program of Study"
              name="program"
              value={formik.values.program}
              onChange={(event) => {
                if (formik.handleChange) {
                  formik.handleChange(event);
                }
                setProgram(event.target.value);
              }}
              style={{ color: theme.color }}
            >
              <MenuItem value={0}>
                <em>Please select</em>
              </MenuItem>
              <MenuItem value={1}>Update feature</MenuItem>
              <MenuItem value={2}>Infomation System</MenuItem>
              <MenuItem value={3}>Support</MenuItem>
              <MenuItem value={4}>Security</MenuItem>
            </Select>
            {formik.errors.program && formik.touched.program && (
              <Typography
                variant="caption"
                color="red"
                sx={(theme) => ({
                  color: theme.color,
                })}
              >
                {formik.errors.program}
              </Typography>
            )}
          </FormControl>
          <TextInput
            id="outlined-multiline-static"
            label="Message"
            multiline
            name="message"
            rows={4}
            value={formik.values.message}
            onChange={(event) => {
              if (formik.handleChange) {
                formik.handleChange(event);
              }
              setMessage(event.target.value);
            }}
            sx={(theme) => ({
              color: theme.color,
            })}
          />
          {formik.errors.message && formik.touched.message && (
            <Typography
              variant="caption"
              color="red"
              sx={(theme) => ({
                color: theme.color,
              })}
            >
              {formik.errors.message}
            </Typography>
          )}
          <FormControlLabel
            control={<Switch />}
            label="Agree to terms and conditions."
            name="agree"
            value={formik.values.agree}
            onClick={formik.handleChange}
            style={{
              padding: "0 0 30px 0",
            }}
            onChange={(event) => {
              if (formik.handleChange) {
                formik.handleChange(event);
              }
              setAgree(event.target.value);
            }}
            sx={(theme) => ({
              color: theme.color,
            })}
          />
          <Button
            variant="container"
            type="submit"
            onClick={() => {
              // dispatch(addContact({id: 0, name: name, email: email, phone: phone, program: program, message: message, agree: agree}));
            }}
          >
            Send
          </Button>
        </form>
        <Snackbar
          className="toast_message"
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{
              width: "100%",
              height: "70px",
              fontSize: "20px",
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            {formik.values.name} send a success Contact!
          </Alert>
        </Snackbar>
        <h1
          style={{ textAlign: "center", color: theme.color, fontWeight: "600" }}
        >
          LIST OF CONTACT
        </h1>
        <Contacts></Contacts>
      </Container>
    </div>
  );
}
