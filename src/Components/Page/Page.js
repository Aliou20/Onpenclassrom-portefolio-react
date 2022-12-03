
import React    from "react";
import Table from 'react-bootstrap/Table';


function Page () {

  const Etudiants = [
  {
    premon : "Aliou",
    nom : "Gningue",
    date_naissance : "17/01/2002",
    Age : 15,
    genre : 'Homme'
  },
  {
    premon : "Mor",
    nom : "Gningue",
    date_naissance : "17/01/2002",
    Age : 15,
    genre : 'Homme'
  },
  {
    premon : "Ibou",
    nom : "Gningue",
    date_naissance : "17/01/2002",
    Age : 15,
    genre : 'Homme'
  },{
    premon : "Mamy",
    nom : "Gningue",
    date_naissance : "17/01/2002",
    Age : 15,
    genre : 'Homme'
  },{
    premon : "SAliou",
    nom : "Gningue",
    date_naissance : "17/01/2002",
    Age : 15,
    genre : 'Homme'
  }
];

  // const tbody = document.getElementById('tbody')

let infos =  Etudiants.map(etudiant =>
      <tr>
        <td>{etudiant.premon}</td>
        <td>{etudiant.nom}</td>
        <td>{etudiant.date_naissance}</td>
        <td>{etudiant.Age}</td>
        <td>{etudiant.genre}</td>
      </tr>

  );
  return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Prenom</th>
          <th>Nom</th>
          <th>Date de naissance</th>
          <th>Age</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {infos}
      </tbody>
    </Table>
  </>
  )
}

export default Page;