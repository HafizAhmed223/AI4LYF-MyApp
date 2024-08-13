import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Menu, MenuItem, TextField, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import deleteIcon from "../assets/deleteIcon.svg";
import sampleData from "../sampleData";
import CustomPagination from "./CustomPagination";

// Define styled components
const SearchField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    background: "#f1f3f5",
    borderRadius: "8px",
    paddingRight: "10px",
    paddingLeft: "10px",
  },
}));

const DropdownButton = styled(Button)(() => ({
  textTransform: "none",
  backgroundColor: "#f1f3f5",
  color: "#333",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#e2e6ea",
  },
}));

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 250,
    renderCell: (params) => (
      <div className="flex items-center space-x-2">
        <img
          src={params.row.image}
          alt="avatar"
          className="rounded-full w-8 h-8 object-cover"
        />
        <span>{params.value}</span>
      </div>
    ),
  },
  {
    field: "diseases",
    headerName: "Diseases",
    width: 220,
    renderCell: (params) => (
      <div className="flex space-x-1 mt-3">
        {params.value.map((disease, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-xs"
          >
            {disease}
          </span>
        ))}
      </div>
    ),
  },
  {
    field: "prevAppointmentDate",
    headerName: "Previous Appointment",
    width: 200,
  },
  {
    field: "statusState",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      const statusColor = {
        Attend: "bg-green-100 text-green-700",
        Missed: "bg-yellow-100 text-yellow-700",
        "No Appointment": "bg-gray-100 text-gray-700",
        Cancelled: "bg-red-100 text-red-700",
      };
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            statusColor[params.value]
          }`}
        >
          {params.value}
        </span>
      );
    },
  },
  {
    field: "nextAppointmentDate",
    headerName: "Next Appointment",
    width: 200,
  },
  {
    field: "actions",
    headerName: "Remove",
    width: 150,
    renderCell: (params) => (
      <IconButton onClick={() => params.row.onDelete(params.row.id)}>
        <img src={deleteIcon} alt="deleteIcon" />
      </IconButton>
    ),
  },
];

const PatientTable = () => {
  const [data, setData] = useState(sampleData);
  const [anchorElShowOnly, setAnchorElShowOnly] = useState(null);
  const [anchorElBulkAction, setAnchorElBulkAction] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);

  const itemsPerPage = 10;
  const totalItems = data.length;

  const handleShowOnlyClick = (event) => {
    setAnchorElShowOnly(event.currentTarget);
  };

  const handleBulkActionClick = (event) => {
    setAnchorElBulkAction(event.currentTarget);
  };

  const handleCloseShowOnly = () => {
    setAnchorElShowOnly(null);
  };

  const handleCloseBulkAction = () => {
    setAnchorElBulkAction(null);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    handleCloseShowOnly();
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // Filtered data based on search and status
  const filteredData = data
    .filter((row) => row.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter((row) =>
      selectedStatus ? row.statusState === selectedStatus : true
    )
    .map((row) => ({
      ...row,
      onDelete: handleDelete,
    }));

  return (
    <div className="p-4 shadow-2xl rounded-[10px] pb-3">
      <div className="flex flex-col items-center mb-4 ">
        <div className="flex flex-col md:flex-row justify-between w-full border-b-2 border-gray-200 p-4">
            <div className="mb-4 md:mb-0">
                <h2 className="text-lg md:text-xl font-semibold text-[#101828]">
                Patients
                </h2>
                <p className="text-sm md:text-base font-normal text-[#475467]">
                Patient Details & Activity Log
                </p>
            </div>
            <div className="flex-end xl:w-[38] lg:w-[34%] md:flex-shrink-0">
                <SearchField
                variant="outlined"
                placeholder="Search"
                size="small"
                value={searchText}
                onChange={handleSearchChange}
                style={{ width: "100%", maxWidth: "380px" }}
                />
            </div>

      </div>

    <div className="flex flex-col lg:flex-row justify-between w-full mt-4 mb-4 gap-4">
        <div className="flex flex-col lg:flex-row w-full text-center gap-2 lg:gap-4">
            <p className="pt-2 text-sm font-semibold text-[#344054] bg-[#E5F4FF] border-2 border-[#D0D5DD] w-full lg:w-[154px] h-[40px] rounded-md cursor-pointer">
            General Info
            </p>
            <p className="pt-2 text-sm font-semibold text-[#344054] bg-[#ffff] border-2 border-[#D0D5DD] w-full lg:w-[154px] h-[40px] rounded-md cursor-pointer">
            Monitoring Status
            </p>
       </div>
        <div className="flex flex-col lg:flex-row gap-3">
            <DropdownButton
            aria-controls="show-only-menu"
            aria-haspopup="true"
            onClick={handleShowOnlyClick}
            className="w-full lg:w-[125px] h-[36px]"
            >
            Show Only
            </DropdownButton>
            <Menu
            id="show-only-menu"
            anchorEl={anchorElShowOnly}
            keepMounted
            open={Boolean(anchorElShowOnly)}
            onClose={handleCloseShowOnly}
            >
            <MenuItem onClick={() => handleStatusChange("")}>All</MenuItem>
            <MenuItem onClick={() => handleStatusChange("Attend")}>Attended</MenuItem>
            <MenuItem onClick={() => handleStatusChange("Missed")}>Missed</MenuItem>
            <MenuItem onClick={() => handleStatusChange("No Appointment")}>No Appointment</MenuItem>
            <MenuItem onClick={() => handleStatusChange("Cancelled")}>Cancelled</MenuItem>
            </Menu>
            <button className="text-sm font-semibold text-[#344054] bg-[#EAECF0] rounded-lg w-full lg:w-[125px] h-[36px]">
            Sort By
            </button>
            <DropdownButton
            aria-controls="bulk-action-menu"
            aria-haspopup="true"
            onClick={handleBulkActionClick}
            className="w-full lg:w-[125px] h-[36px]"
            >
            Bulk Action
            </DropdownButton>
            <Menu
            id="bulk-action-menu"
            anchorEl={anchorElBulkAction}
            keepMounted
            open={Boolean(anchorElBulkAction)}
            onClose={handleCloseBulkAction}
            >
            <MenuItem>Make Attend</MenuItem>
            <MenuItem>Make Missed</MenuItem>
            <MenuItem>Make Cancelled</MenuItem>
            <MenuItem style={{ color: "#FF3D00" }}>Delete Selected</MenuItem>
            </Menu>
        </div>
    </div>

      </div>
      <DataGrid
        rows={filteredData.slice(
          page * itemsPerPage,
          page * itemsPerPage + itemsPerPage
        )}
        columns={columns}
        disableColumnMenu
        autoHeight
        checkboxSelection
        disableSelectionOnClick
        pagination={false} // Disables built-in pagination
        hideFooter={true}
      />

      <CustomPagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={page}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default PatientTable;
