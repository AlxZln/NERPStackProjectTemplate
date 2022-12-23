import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import { Grid, Paper, TextField } from '@mui/material';

const materialTheme = getTheme(DEFAULT_OPTIONS, { isVirtualized: true });
const theme = useTheme(materialTheme);
const list = [
  {
    id: 0,
    name: 'VSCode',
    deadline: new Date(2020, 1, 17),
    type: 'SETUP',
    isComplete: true,
  },
  {
    id: 1,
    name: 'VSCode',
    deadline: new Date(2020, 1, 17),
    type: 'SETUP',
    isComplete: true,
  },
]





export const NewTableComp = () => {
  const datass = list;
  const [data, setData] = React.useState({ nodes: list });
  const handleUpdate = (value, id, property) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.map((node) => {
        if (node.id === id) {
          return { ...node, [property]: value };
        } else {
          return node;
        }
      }),
    }));
  };

  const COLUMNS = [
    {
      label: 'Task',
      renderCell: (item) => (
        <input
          type="text"
          style={{ width: '100%', border: 'none', fontSize: '1rem', padding: 0, margin: 0 }}
          value={item.name}
          onChange={(event) => handleUpdate(event.target.value, item.id, 'name')}
        />
      ),
    },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
  ];

  const VIRTUALIZED_OPTIONS = {
    rowHeight: (_item, _index) => 54,
  };

  return (
    <Paper variant="outlined" square style={{ height: '100vh' }}>
      <CompactTable
        columns={COLUMNS}
        virtualizedOptions={VIRTUALIZED_OPTIONS}
        data={data}
        theme={theme}
        layout={{ fixedHeader: true }}
      />
    </Paper>
  )
}