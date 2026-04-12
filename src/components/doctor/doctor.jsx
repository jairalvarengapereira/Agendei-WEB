function Doctor(props){

  return <tr>
    <td>{props.doctor}</td>
    <td>{props.specialty}</td>

    <td className="text-end">
      <div className="d-inline me-2">
        <button onClick={()=>props.clickEdit(props.id_doctor)} 
        className="btn btn-primary btn-action">
          <i className="bi bi-pencil-square"></i>
        </button>
      </div>
      

      <button onClick={()=>props.clickDelete(props.id_doctor)} 
      className="btn btn-danger btn-action">
        <i className="bi bi-trash"></i>
      </button>
    </td>
</tr>
}

export default Doctor;