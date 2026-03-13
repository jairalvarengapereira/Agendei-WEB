function Service(props) {
  return (
    <tr>
      <td>{props.description}</td>
      <td className="text-end">
        <div className="d-inline me-3">
          <button
            onClick={() => props.clickEdit(props.id_service)}
            className="btn btn-primary btn-sm"
          >
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
        <button
          onClick={() => props.clickDelete(props.id_service)}
          className="btn btn-danger btn-sm"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default Service;
