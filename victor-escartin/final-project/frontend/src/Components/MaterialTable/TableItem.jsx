/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import './TableItem.css';

import ArrowDownward from '@material-ui/icons/ArrowDownward';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

import Search from '@material-ui/icons/Search';

import { deleteChallenge } from '../../redux/actions/challenge-actions';

const tableIcons = {

  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),

};

// eslint-disable-next-line no-unused-vars
export default function TableItem({ challenges }) {
  const dispatch = useDispatch();
  const columns = [
    {
      title: 'Título del reto',
      field: 'title',
    },
    {
      title: 'Creador',
      field: 'creator',
    },
    {
      title: 'Donaciones',
      field: 'collected',
      type: 'numeric',
    },
    {
      title: 'Objetivo',
      field: 'target',
      type: 'numeric',
    },
    {
      title: 'Finalización',
      field: 'date',
    },
  ];

  const data = challenges.map((challenge) => (
    {
      title: challenge.title,
      creator: challenge.creator,
      collected: challenge.collected,
      target: challenge.target,
      date: challenge.date,
    }
  ));

  const findChallenge = (item) => {
    const challengeFound = challenges.find((challenge) => challenge.title === item.title);

    dispatch(deleteChallenge(challengeFound));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="table-container">
      <h2>Tabla de Administración de Retos </h2>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={data}
        title="Retos activos"
        actions={[
          {
            id: 'editChallenge',
            icon: tableIcons.Edit,
            tooltip: 'Editar Reto',
            onClick: (event, rowData) => alert(`Has presionado editar el reto ${rowData.title}`),
          },
          {
            id: 'removeChallenge',
            icon: tableIcons.Delete,
            tooltip: 'Eliminar Reto',
            onClick: (event, rowData) => findChallenge(rowData),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: 'Acciones',
          },
        }}
      />
    </div>
  );
}
