/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import './CreateChallengeScreen.css';
import { createChallenge } from '../../redux/actions/challenge-actions';

function CreateChallengeScreen() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [miniDescription, setMiniDescription] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [target, setTarget] = useState('');
  const [collected, setCollected] = useState('');
  const [participants, setParticipants] = useState('');
  const [days, setDays] = useState('');
  const [creator, setCreator] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="form-builder">
      <h3>CREA TU RETO SOLIDARIO</h3>
      <Form id="create-form">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Título</Form.Label>
          <Form.Control id="challenge-title" className="data-form" type="text" placeholder="Título del reto" onChange={(event) => setTitle(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Fecha de finalización del reto</Form.Label>
          <Form.Control className="data-form" type="catetextgories" placeholder="dd/mm/aa" onChange={(event) => setDate(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Breve Descripción</Form.Label>
          <Form.Control className="data-form" as="textarea" rows={3} placeholder="Haz una breve introducción a tu reto" onChange={(event) => setMiniDescription(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea2">
          <Form.Label>Descripción completa del reto</Form.Label>
          <Form.Control className="data-form" as="textarea" rows={10} placeholder="Describe el objetivo de tu reto" onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control className="data-form" type="text" placeholder="Escribe una palabra que describe el tipo de reto" onChange={(event) => setCategory(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput4">
          <Form.Label>Imagen</Form.Label>
          <Form.Control className="data-form" type="text" placeholder="Engancha la URL de la imagen de tu reto" onChange={(event) => setImage(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput5">
          <Form.Label>Target</Form.Label>
          <Form.Control className="data-form" type="number" placeholder="Introduce la cantidad objectivo de tu reto" onChange={(event) => setTarget(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput6">
          <Form.Label>Donaciones iniciales</Form.Label>
          <Form.Control className="data-form" type="number" placeholder="Indica la cantidad desde la que se inicia el reto" onChange={(event) => setCollected(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput7">
          <Form.Label>Participantes</Form.Label>
          <Form.Control className="data-form" type="number" placeholder="Introduce la cantidad de participantes que inician el reto" onChange={(event) => setParticipants(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput8">
          <Form.Label>Dias hasta la finalización</Form.Label>
          <Form.Control className="data-form" type="number" placeholder="Indica los dias pendientes hasta la fecha fin del reto" onChange={(event) => setDays(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput9">
          <Form.Label>Responsable del reto</Form.Label>
          <Form.Control className="data-form" type="text" placeholder="Introduce el nombre de la persona responsable del reto" onChange={(event) => setCreator(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput10">
          <Form.Label>Latitud</Form.Label>
          <Form.Control className="data-form" type="number" placeholder="Introduce la coordenada de latitud de la ubicación del reto, por defecto 41.39867113104639" onChange={(event) => setLat(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput11">
          <Form.Label>Longitud</Form.Label>
          <Form.Control className="data-form" type="number" placeholder="Introduce la coordenada de latitud de la ubicación del reto, por defecto 2.199980997782548" onChange={(event) => setLng(event.target.value)} />
        </Form.Group>
        <Button
          id="submit-form"
          variant="primary"
          type="button"
          onClick={() => {
            dispatch(createChallenge(
              {
                title,
                date,
                miniDescription,
                description,
                category,
                image,
                target,
                collected,
                participants,
                days,
                creator,
                lat,
                lng,
              },
            ));
          }}
          href="/challenges"
        >
          CREAR RETO
        </Button>
      </Form>
    </div>

  );
}

export default CreateChallengeScreen;
