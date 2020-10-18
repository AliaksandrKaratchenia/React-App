import React from "react";
import { Checkbox, Popover, Typography } from '@material-ui/core';
import { ColDef } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

interface ToolBarProps {
    columns: ColDef[];
    setColumns: (newColumns: ColDef[]) => void;
}

const ToolBar: React.FC<ToolBarProps> = ({
    columns,
    setColumns,
}: ToolBarProps) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setColumns(
            columns.map(column => column.field === event.target.name ?
                { ...column, hide: !event.target.checked } :
                column)
        );
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClick}>
                Visible Columns
            </Button>
            <Popover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {columns.map(column => (
                    <Typography key={column.field}>
                        {column.headerName}
                        <Checkbox
                            name={column.field}
                            checked={!column.hide}
                            onChange={handleCheckboxChange}
                        />
                    </Typography>
                ))}
            </Popover>
        </>
    );
};
export default ToolBar;