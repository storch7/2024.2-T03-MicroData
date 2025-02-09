import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import dayjs from "dayjs";

export default function DataSelect({ label, value, onChange, onBlur, erro }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={dayjs(value)}
        onChange={onChange}
        format="DD/MM/YYYY"
        onBlur={onBlur}
        error={erro}
        renderInput={{
          textField: (params) => <TextField {...params} variant="filled" />,
    }}
      />
    </LocalizationProvider>
  );
}