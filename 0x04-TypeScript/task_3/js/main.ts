/// <reference path="crud.d.ts" />
import { RowElement,RowID } from "./interface"; "./interface";
import * as CRUD from "./crud"; 

export const row:RowElement ={
    firstName: 'Guillaume',
    lastName: 'Salva'};

export const newRowID:RowID = CRUD.insertRow(row);
row.age = 23;
export const updatedRow:RowElement = row;
CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);

