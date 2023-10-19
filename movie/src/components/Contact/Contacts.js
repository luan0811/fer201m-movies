import {
  Container,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useContext } from "react";
import { TextInput } from "react-materialize";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../features/Contacts";
import { ThemeContext } from "../ThemeContext";
import { style } from "@mui/system";
export default function Contacts() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contacts.value);
  const [newContact, setNewContact] = useState("");
  return (
    <Container maxWidth="md">
      {contactList.map((contact) => (
        <ListItem
          key={contact.id}
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            color: "black", backgroundColor: "white" , 
          }}
        >
          <ListItemText
            primary={contact.name}
            secondary={[contact.message]}
            children={[contact.email, contact.phone, contact.agree]}
         />
          <div style={{ width: "100%" }}>
            <TextInput
              label="Type new message...."
              onChange={(e) => setNewContact(e.target.value)}
              style={{ width: "100%" }}
              data-length={50}
            />
            <Button
              style={{ backgroundColor: "#000", color: "#fff" }}
              onClick={() => {
                dispatch(
                  updateContact({ id: contact.id, message: newContact })
                );
              }}
            >
              Update
            </Button>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => {
                dispatch(
                  deleteContact({
                    id: contact.id,
                  })
                );
              }}
            >
              <DeleteIcon/>
            </IconButton>
          </div>
        </ListItem>
      ))}
    </Container>
  );
}
