import React from "react";
import {
  Pagination,
  PaginationItem,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem": {
    backgroundColor: "#EAECF0",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: "4px",
    margin: "0 2px",
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
  "& .MuiPaginationItem-page:hover": {
    backgroundColor: "#e3f2fd",
  },
  "& .MuiPaginationItem-previousNext": {
    border: "1px solid #ccc",
    color: "#1976d2",
  },
  "& .MuiPaginationItem-previousNext.Mui-disabled": {
    color: "#b0bec5",
  },
});

const CustomPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event, value) => {
    // value is 1-based, so subtract 1 to get 0-based page number
    onPageChange(value - 1);
  };

  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
        mb: 2,
        p: 1,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Showing {startItem} - {endItem} of {totalItems}
      </Typography>
      <StyledPagination
        count={totalPages}
        page={currentPage + 1} // Convert 0-based to 1-based for Material-UI
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              "&.Mui-selected": {
                bgcolor: "#1976d2",
                color: "#fff",
              },
            }}
          />
        )}
        shape="rounded"
        color="primary"
        siblingCount={1}
        boundaryCount={1}
      />
    </Box>
  );
};

export default CustomPagination;
