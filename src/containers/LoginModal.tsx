import LoginForm from "@/components/LoginForm";
import { modalClose } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const open = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => dispatch(modalClose())}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <LoginForm />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
