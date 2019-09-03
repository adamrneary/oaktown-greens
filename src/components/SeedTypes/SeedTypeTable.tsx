import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { SeedType } from "../../models/SeedType";
type Props = {
  data: SeedType[];
  handleDelete: (id: string) => void;
};
export default function SeedTypeTable({ data, handleDelete }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Ingredient</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            <TableCell component="th" scope="row">
              <Link to={`/seed_types/${item.id}`}>{item.name}</Link>
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              <IconButton
                size="small"
                aria-label="Delete"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Link to={`/seed_types/${item.id}`}>
                <IconButton size="small" aria-label="Edit">
                  <EditIcon />
                </IconButton>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
