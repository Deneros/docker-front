import { styled } from "@nextui-org/react";

export const StyledContainer = styled("div", {
  padding: "20px",
  width: "100%",
  height: "calc(100% - 60px)",
  backgroundColor: "#555555",
});

export const StyledContainerGroupTable = styled("div", {
  width: "100%",
  height: "100%",
});

export const StyledContainerTable = styled("div", {
  backgroundColor: "#FFF",
  borderTopRightRadius: "3px",
  borderBottomLeftRadius: "3px",
  borderBottomRightRadius: "3px",
  padding: "20px 10px 0px 10px",
  overflowY: "auto",
  height: "calc(100% - 44px)",
});

export const StyledCointanerList = styled("div", {
  backgroundColor: "#555555",
});

export const StyledUl = styled("ul", {
  display: "flex",
  listStyle: "none",
  ".active": {
    backgroundColor: "#FFF",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    marginTop: "0",
  },
  ".noActive": {
    borderRight: "1px solid #A1A1A1",
  },
});

export const StyledLi = styled("li", {
  padding: "10px 20px",
  marginTop: "3px",
  cursor: "pointer",
  backgroundColor: "#DBDBDB",
});
