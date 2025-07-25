"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueFormatter,
  GridRowId,
} from "@mui/x-data-grid";
import styles from "./Table.module.scss";
import { ShotData } from "@/types/shotData";

type TableProps = {
  shots: ShotData[];
  setShots?: Dispatch<SetStateAction<ShotData[]>>;
  hideSelect?: boolean;
};

const Table: React.FC<TableProps> = ({ shots, setShots, hideSelect }) => {
  if (!shots) {
    return;
  }

  const [selectedIds, setSelectedIds] = useState<Set<GridRowId>>(new Set());
  const [displayShots, setDisplayShots] = useState<ShotData[]>(shots);

  useEffect(() => {
    setDisplayShots(shots);
  }, [shots]);

  const validClubs = [
    "Driver",
    "3 Wood",
    "5 Wood",
    "3 Hybrid",
    "4 Hybrid",
    "5 Iron",
    "6 Iron",
    "7 Iron",
    "8 Iron",
    "9 Iron",
    "Pitching Wedge",
    "Sand Wedge",
    "Lob Wedge",
    "Putter",
  ];

  const rows: GridRowsProp = displayShots
    .filter((shot) => validClubs.includes(shot.Club))
    .map((shot) => {
      const cleanClub = shot.Club.replace(/\s+/g, "-").toLowerCase();
      const rowId = `${cleanClub}-${shot.Index}`;
      return { ...shot, id: rowId };
    });

  const columns: GridColDef[] = [
    {
      field: "Index",
      headerName: "Index",
      width: 60,
    },
    {
      field: "Club",
      headerName: "Club",
      width: 50,
    },
    {
      field: "Ball Speed(mph)",
      headerName: "Ball Speed (mph)",
      width: 90,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params} mph`,
    },
    {
      field: "Carry(yd)",
      headerName: "Carry (yd)",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params} yds`,
    },
    {
      field: "Total(yd)",
      headerName: "Total (yd)",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params} yds`,
    },
    {
      field: "Launch Angle",
      headerName: "Launch Angle",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
    {
      field: "Launch Direction",
      headerName: "Launch Direction",
      width: 90,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
    {
      field: "Attack Angle",
      headerName: "Attack Angle",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
    {
      field: "Back Spin",
      headerName: "Back Spin",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}`,
    },
    {
      field: "Side Spin",
      headerName: "Side Spin",
      width: 70,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}`,
    },
    {
      field: "Spin Rate",
      headerName: "Spin Rate",
      width: 70,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}`,
    },
    {
      field: "Spin Axis",
      headerName: "Spin Axis",
      width: 70,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
    {
      field: "Face Angle",
      headerName: "Face Angle",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
    {
      field: "Club Path",
      headerName: "Club Path",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
    {
      field: "Landing Angle",
      headerName: "Landing Angle",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
    {
      field: "Offline(yd)",
      headerName: "Offline (yd)",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params} yds`,
    },
    {
      field: "Apex(yd)",
      headerName: "Apex (yd)",
      width: 70,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params} yds`,
    },
    {
      field: " Dynamic Loft",
      headerName: "Dynamic Loft",
      width: 80,
      valueFormatter: (params: GridValueFormatter<ShotData>) => `${params}°`,
    },
  ];

  const handleDeleteShots = () => {
    setShots &&
      setShots((prevShots) =>
        prevShots.filter((shot) => {
          const cleanClub = shot.Club.replace(/\s+/g, "-").toLowerCase();
          const id = `${cleanClub}-${shot.Index}`;
          return !selectedIds.has(id);
        })
      );
    setSelectedIds(new Set());
  };

  return (
    <div className={styles.table}>
      {selectedIds.size > 0 && (
        <button onClick={handleDeleteShots} style={{ margin: "1rem 0" }}>
          Delete Shots
        </button>
      )}
      {displayShots.length > 0 && (
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={!hideSelect}
          onRowSelectionModelChange={(selection) => {
            if (typeof selection === "object" && "ids" in selection) {
              setSelectedIds(new Set(selection.ids));
            }
          }}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f4f4f4",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "600",
              fontSize: "12px",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
              textWrap: "wrap",
              textAlign: "center",
            },
            "& .MuiDataGrid-row": {
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            },
            "& .MuiDataGrid-cell": {
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            },
          }}
        />
      )}
    </div>
  );
};

export default Table;
