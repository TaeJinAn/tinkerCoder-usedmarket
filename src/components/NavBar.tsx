"use client";
import { modalOpen } from "@/store/slices/modalSlice";
import { AppBar, Box, Button, InputBase, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

export default function NavBar() {
  const dispatch = useDispatch();
  const [navSubBarOpen, setNavSubBarOpen] = useState(false);
  const onClick = () => {
    setNavSubBarOpen(!navSubBarOpen);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" color="default">
          <Toolbar className="flex justify-between">
            <Box className="flex gap-5 items-center">
              <AcUnitIcon fontSize="large" />
              <div
                className="hover:bg-slate-300 cursor-pointer rounded-sm"
                onClick={onClick}
              >
                <MenuIcon fontSize="large" />
              </div>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button color="inherit" onClick={() => dispatch(modalOpen())}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        position={"absolute"}
        className={`bg-gray-800 w-[100%] overflow-hidden transition-all duration-700 ${
          navSubBarOpen ? "max-h-[500px] bg-opacity-60" : "max-h-0 bg-opacity-90"
        }`}
      >
        <Box className="p-6">
          <span className="text-xl text-white font-bold">Ski</span>
        </Box>
      </Box>
    </>
  );
}
